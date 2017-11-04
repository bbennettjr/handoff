import { ValidatedMethod } from "meteor/mdg:validated-method"
import { Validator } from "jsonschema"
import schema from "/imports/api/schemas/users.json"

const v = new Validator()

export const updateUser = new ValidatedMethod({
  name: "updateUser",
  validate({ profile }) {
    const result = v.validate(profile, schema.userProfile)
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
