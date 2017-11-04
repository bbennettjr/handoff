import { Groups } from "./groups.js"
import { ValidatedMethod } from "meteor/mdg:validated-method"
import { Validator } from "jsonschema"
import schema from "/imports/api/schemas/groups.json"

const v = new Validator()

// Validated methods
export const insertGroup = new ValidatedMethod({
  name: "insertGroup",
  validate({ group }) {
    const result = v.validate(group, schema)
    console.log(
      "validate result in insertGroup method.  Use to map result to ValidationError",
      result
    )
    if (!result.valid) throw new ValidationError()
    // take an array of objs.  objs = {name: string, type: string, message: string}
  },
  run({ group }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Not authorized",
        "You must sign in to create a group"
      )
    }
    let insertedId = Group.insertOne(group)
    return { _id: insertedId }
  }
})

export const addToGroup = new ValidatedMethod({
  name: "addToGroup",
  validate({ _groupId }) {
    const result = v.validate(_groupId, schema)
    if (!result.valid) throw new ValidationError()
  },
  run({ _groupId }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Not authorized",
        "You must sign in to join a group"
      )
    }
    let writeResult = Group.update(_groupId, {
      $addToSet: { members: this.userId }
    })
    return writeResult.hasWriteError() ? writeResult.writeError : "success"
  }
})

export const removeFromGroup = new ValidatedMethod({
  name: "removeFromGroup",
  validate({ _groupId }) {
    const result = v.validate(_groupId, schema)
    if (!result.valid) throw new ValidationError()
  },
  run({ _groupId }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Not authorized",
        "You must sign in to remove yourself from a group"
      )
    }
    let writeResult = Group.update(_groupId, {
      $pull: { members: this.userId }
    })
    return writeResult.hasWriteError() ? writeResult.writeError : "success"
  }
})
