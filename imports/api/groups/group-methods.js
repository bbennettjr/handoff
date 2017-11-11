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
    // if (!this.userId) {
    //   throw new Meteor.Error(
    //     "Not authorized",
    //     "You must sign in to create a group"
    //   )
    // }
    if (!group.members) {
      group.members = [this.userId]
    }
    console.log("group", group)
    let insertedId = Groups.insert(group)
    return { _id: insertedId }
  }
})

export const addToGroup = new ValidatedMethod({
  name: "addToGroup",
  validate({ _id }) {
    const result = v.validate({ _id: _id }, schema)
    if (!result.valid) throw new ValidationError()
  },
  run({ _id }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Not authorized",
        "You must sign in to join a group"
      )
    }
    console.log("addToGroup _id:", _id)
    let result = Groups.update(
      { _id: _id },
      {
        $addToSet: { members: this.userId }
      }
    )
    return { result }
  }
})

export const removeFromGroup = new ValidatedMethod({
  name: "removeFromGroup",
  validate({ _id }) {
    const result = v.validate(_id, schema)
    if (!result.valid) throw new ValidationError()
  },
  run({ _id }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Not authorized",
        "You must sign in to remove yourself from a group"
      )
    }
    console.log("removeFromGroup _id:", _id)
    let result = Groups.update(
      { _id: _id },
      {
        $pull: { members: this.userId }
      }
    )
    return { result }
  }
})
