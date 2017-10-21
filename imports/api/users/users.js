// Used to update the user information from the accounts page
import { Meteor } from "meteor/meteor"

if (Meteor.isServer) {
  Meteor.publish("allUsers", () => {
    return Meteor.users.find({}, { fields: { "profile.name": 1, _id: 1 } })
  })
}

