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

	Meteor.publish("myPatients", function() {
		if (!this.userId) return this.ready()

		let me = Meteor.user()
		// console.log(me.profile.coveredPatients)
		return Patients.find({ _id: { $in: me.profile.coveredPatients } })
	})
}

// testing validated methods

// Meteor.methods({
// 	xxxaddPatientsToUser(patientIdList, userId) {
// 		if (userId === Meteor.userId()) {
// 			throw new Meteor.Error("Handoff error", "Cannot add patients to yourself")
// 		}
// 		Meteor.users.update(
// 			{ _id: userId },
// 			{
// 				$addToSet: {
// 					"profile.coveredPatients": { $each: patientIdList }
// 				}
// 			}
// 		)
// 	},

// 	removePatientsFromUser(patientIdList, userId) {
// 		Meteor.users.update(
// 			{ _id: userId },
// 			{
// 				$pullAll: {
// 					"profile.coveredPatients": patientIdList
// 				}
// 			}
// 		)
// 	},

// 	addPatientToUser(patientId, userId) {
// 		Meteor.users.update(
// 			{ _id: userId },
// 			{
// 				$addToSet: {
// 					"profile.coveredPatients": patientId
// 				}
// 			}
// 		)
// 	},
// 	removePatientFromUser(patientId, userId) {
// 		Meteor.users.update(
// 			{ _id: userId },
// 			{
// 				$pull: {
// 					"profile.coveredPatients": patientId
// 				}
// 			}
// 		)
// 	},
// 	addAllPatientsToOtherUserId(otherUserId) {
// 		let me = Meteor.user()
// 		let coveredPatients = me.profile.coveredPatients
// 		Meteor.users.update(
// 			{
// 				_id: otherUserId
// 			},
// 			{
// 				$addToSet: {
// 					"profile.coveredPatients": { $each: coveredPatients }
// 				}
// 			}
// 		)
// 	},

// 	// insert a patient
// 	"patient.insert"(patient) {
// 		let userId = Meteor.userId()
// 		if (!userId) {
// 			throw new Meteor.Error(
// 				"Not authorized",
// 				"You must sign in to create a patient"
// 			)
// 		}

// 		let insertedId = Patients.insert(patient)
// 		Meteor.users.update(
// 			{ _id: userId },
// 			{ $addToSet: { "profile.coveredPatients": insertedId } }
// 		)
// 		return { _id: insertedId }
// 	},

// 	// update a patient
// 	"patient.update"(patient) {
// 		// check that a user is signed in
// 		let userId = Meteor.userId()
// 		if (!userId) {
// 			throw new Meteor.Error(
// 				"Not authorized",
// 				"You must sign in to create a patient"
// 			)
// 		}

// 		if (!patient._id) {
// 			throw new Meteor.Error(
// 				"Patient has no _id!",
// 				"You must give patient an _id"
// 			)
// 		}

// 		// update the patient
// 		// kvothe: throwing Meteor.Error reason: "MinimongoError: Mod on _id not allowed"
// 		// IDK what this is.
// 		Patients.update(patient._id, { $set: patient })

// 		Meteor.users.update(userId, {
// 			$addToSet: { "profile.coveredPatients": patient._id }
// 		})
// 		return { _id: patient._id }
// 	},

// 	// delete a patient
// 	"patient.delete"(patientId) {
// 		// does the patient exist
// 		let patient = Patients.findOne(patientId)
// 		if (!patient)
// 			throw new Meteor.Error("Does Not Exist", "patient could not be found")

// 		// check that user exists and owns patient
// 		let user = Meteor.user()
// 		if (patient.userId !== user._id)
// 			throw new Meteor.Error(
// 				"Not Authorized",
// 				"You are not the owner of this patient"
// 			)

// 		// delete the patient
// 		Patients.remove(patientId)
// 	}
// })
