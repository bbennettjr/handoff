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
}
