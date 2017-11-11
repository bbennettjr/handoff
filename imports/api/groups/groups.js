import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"
import _ from "lodash"
export const Groups = new Mongo.Collection("groups")

if (Meteor.isServer) {
  Meteor.publish("private.group", () => {
    // owner exists when the group is private
    return Groups.findOne(
      { owner: { $exists: true, $eq: this.userId } },
      { members: true }
    )
  })
  Meteor.publish("member.groups", ({ userId }) => {
    // all groups this user is a member
    console.log("member.groups userId: ", userId)
    const memberGroups = Groups.find(
      { members: userId },
      { members: true, name: true }
    )
    // kvothe: USE lodash to concat this into a set
    const members = memberGroups.fetch().reduce((acc, m) => {
      return acc.concat(m.members)
    }, [])
    console.log("member.groups members:", members)
    return [
      memberGroups,
      Meteor.users.find({ _id: { $in: members } }, { name: true })
    ]
  })
  Meteor.publish("all.groups", () => {
    // all groups in collection
    return Groups.find({}, { $sort: { members: -1 } })
  })
}
