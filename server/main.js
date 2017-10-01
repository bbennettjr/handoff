import { Meteor } from "meteor/meteor"
import { Accounts } from "meteor/accounts-base"

// Fixtures
import "./fixtures.js"

// Collections and Methods
import "../imports/api/patients/patients.js"
import "../imports/api/users/users.js"

// Chat server
import "./chat.js"

Accounts.onCreateUser((options, user) => {
  const customizedUser = Object.assign({}, user)
  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    customizedUser.profile = options.profile
  }
  return customizedUser
})
