import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"

export const Groups = new Mongo.Collection("groups")

if (Meteor.isServer) {
  Meteor.publish("private.group", () => {
    // owner exists when the group is private
    return Groups.findOne(
      { owner: { $exists: true, $eq: this.userId } },
      { members: true }
    )
  })
  Meteor.publish("member.groups", () => {
    // all groups this user is a member
    return Groups.find({ members: this.userId }, { members: true })
  })
  Meteor.publish("all.groups", () => {
    // all groups in collection
    return Groups.find({})
  })
}
