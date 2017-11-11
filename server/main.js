import { Meteor } from "meteor/meteor"
import { Accounts } from "meteor/accounts-base"

// Fixtures
import "/server/fixtures/patients.js"
import "/server/fixtures/medications.js"

// Collections
import "/imports/api/patients/patients.js"
import "/imports/api/users/users.js"
import "/imports/api/groups/groups.js"

// Methods
import "/imports/api/patients/patient-methods.js"
import "/imports/api/users/user-methods.js"
import "/imports/api/groups/group-methods.js"

// Group
import createPrivateGroup from "/imports/api/groups/create-private-group.js"

Accounts.onCreateUser((options, user) => {
  const customizedUser = Object.assign({}, user)
  // We still want the default hook's 'profile' behavior.
  if (options.profile) {
    customizedUser.profile = options.profile
  }
  // create a private group for this user to add doctors
  // createPrivateGroup(options.profile.name)
  return customizedUser
})
