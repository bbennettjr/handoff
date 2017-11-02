import { ValidatedMethod } from "meteor/mdg:validated-method"
import { Validator } from "jsonschema"
const v = new Validator()

const schemas = {
  userId: { type: "string" },
  userProfile: {
    type: "object",
    properties: {
      name: { type: "string" },
      degree: { type: "string" },
      company: { type: "string" },
      npi: { type: "string" }
    }
  }
}

export const updateUser = new ValidatedMethod({
  name: "updateUser",
  validate({ profile }) {
    const result = v.validate(profile, schemas.userProfile)
    if (!result.valid) throw new ValidationError()
  },
  run({ profile }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Not authorized",
        "Wrong account",
        "You cannot update another user's account"
      )
    }
    Meteor.users.update(this.userId, {
      $set: {
        profile: profile
      }
    })
  }
})
