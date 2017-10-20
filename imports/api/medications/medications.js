import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"

export const Medications = new Mongo.Collection("medications")

// Publications
if (Meteor.isServer) {
  Meteor.publish("medications", () => {
    return Medications.find({})
  })
}
