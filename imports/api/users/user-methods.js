import { Patients } from "./patients.js"
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
  validate({ profile, userId }) {
    const result = v.validate(profile, schemas.userProfile)
    if (!result.valid) throw new ValidationError()
  },
  run({ profile, userId }) {
    if (userId !== Meteor.userId()) {
      throw new Meteor.Error("Not authorized", "Wrong account.")
    }
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
