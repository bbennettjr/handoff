import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"

export const Patients = new Mongo.Collection("patients")

// Publications
if (Meteor.isServer) {
	// Kvothe: Only subscribe to patients from your hospital
	Meteor.publish("patients", () => {
		return Patients.find({}, { sort: { createdAt: -1 } })
	})
	Meteor.publish("patient", ({ match }) => {
		return Patients.find({ _id: match.params._id })
	})

	Meteor.publish("allUsers", () => {
		return Meteor.users.find()
	})
}

Meteor.methods({
	addPatientToUser(patientId, userId) {
		Meteor.users.update(
			{ _id: userId },
			{
				$addToSet: {
					"profile.coveredPatients": patientId
				}
			}
		)
	},
	removePatientFromUser(patientId, userId) {
		Meteor.users.update(
			{ _id: userId },
			{
				$pull: {
					"profile.coveredPatients": patientId
				}
			}
		)
	},

	addAllPatientsToOtherUserId(otherUserId) {
		let me = Meteor.user()
		let coveredPatients = me.profile.coveredPatients

		Meteor.users.update(
			{
				_id: otherUserId
			},
			{
				$addToSet: {
					"profile.coveredPatients": { $each: coveredPatients }
				}
			}
		)

		Meteor.users.update(
			{
				_id: me._id
			},
			{ $set: { "profile.coveredPatients": [] } }
		)
	},

	"patient.insert"(patient) {
		let userId = Meteor.userId()
		if (!userId) {
			throw new Meteor.Error(
				"Not authorized",
				"You must sign in to create a patient"
			)
		}

		let insertedId = Patients.insert(patient)
		Meteor.users.update(
			{ _id: userId },
			{ $addToSet: { "profile.coveredPatients": insertedId } }
		)
		return { _id: insertedId }
	},

	// insert a patient
	"patient.update"(patient) {
		// check that a user is signed in
		let userId = Meteor.userId()
		if (!userId) {
			throw new Meteor.Error(
				"Not authorized",
				"You must sign in to create a patient"
			)
		}

		if (!patient._id) {
			throw new Meteor.Error(
				"Patient has no _id!",
				"You must give patient an _id"
			)
		}

		// insert the patient
		let insertedId = Patients.update({ _id: patient._id }, { $set: patient })

		Meteor.users.update(
			{ _id: userId },
			{ $addToSet: { "profile.coveredPatients": patient._id } }
		)
		return { _id: patient._id }
	},

	// remove a patient
	"patient.remove"(patientId) {
		// does the patient exist
		let patient = Patients.findOne(patientId)
		if (!patient)
			throw new Meteor.Error("Does Not Exist", "patient could not be found")

		// check that user exists and owns patient
		let user = Meteor.user()
		if (patient.userId !== user._id)
			throw new Meteor.Error(
				"Not Authorized",
				"You are not the owner of this patient"
			)

		// remove the patient
		Patients.remove(patientId)
	}
})
