// Used to update the user information from the accounts page
import { Meteor } from "meteor/meteor"

if (Meteor.isServer) {
  Meteor.publish("allUsers", () => {
    return Meteor.users.find()
  })
}

Meteor.methods({
  updateUser(profile, userId) {
    Meteor.users.update(
      { _id: userId },
      {
        $set: {
          profile: profile
        }
      }
    )
  }
})
