import { Accounts } from "meteor/accounts-base"

Accounts.ui.config({
  passwordSignupFields: "EMAIL_ONLY"
})
if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    let profile = user.profile || {}
    profile.coveredPatients = []
    user.profile = profile
    return user
  })
}
