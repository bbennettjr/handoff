import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"

export const Groups = Mongo.Collection("groups")

if (Meteor.isServer) {
  Meteor.publish("groups", () => {
    return Groups.find({})
  })
}
