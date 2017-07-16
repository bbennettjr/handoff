import { Meteor } from "meteor/meteor"
import { Accounts } from "meteor/accounts-base"

// Fixtures
import "./fixtures.js"

// Collections
import "../imports/api/patients/patients.js"

Accounts.onCreateUser((options, user) => {
  let profile = user.profile || {}
  profile.coveredPatients = []
  user.profile = profile
  return user
})
