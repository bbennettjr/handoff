import { Patients } from "./patients.js"
import { ValidatedMethod } from "meteor/mdg:validated-method"
import { Validator } from "jsonschema"
import schema from "/imports/api/schemas/groups.json"

const v = new Validator()

// Validated methods
export const addToGroup = new ValidatedMethod({
  name: "addToGroup",
  validate() {
    // const result = v.validate(patient, schema.patient)
    // if (!result.valid) throw new ValidationError()
  },
  run() {
    // if (!this.userId) {
    //   throw new Meteor.Error(
    //     "Not authorized",
    //     "You must sign in to join a group"
    //   )
    // }
    // let insertedId = Group.insert(patient)
    // Meteor.users.update(this.userId, {
    //   $addToSet: { "profile.coveredPatients": insertedId }
    // })
    // return { _id: insertedId }
  }
})
