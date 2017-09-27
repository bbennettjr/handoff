// Used to update the user information from the accounts page
import { Meteor } from "meteor/meteor"

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
