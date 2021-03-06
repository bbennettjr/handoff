import { Patients } from "./patients.js"
import { ValidatedMethod } from "meteor/mdg:validated-method"
import { Validator } from "jsonschema"
import schema from "/imports/api/schemas/patients.json"
const v = new Validator()

// Validated methods
export const insertPatient = new ValidatedMethod({
  name: "insertPatient",
  validate({ patient }) {
    const result = v.validate(patient, schema.patient)
    if (!result.valid) throw new ValidationError()
  },
  run({ patient }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Not authorized",
        "You must sign in to create a patient"
      )
    }
    let insertedId = Patients.insert(patient)
    Meteor.users.update(this.userId, {
      $addToSet: { "profile.coveredPatients": insertedId }
    })
    return { _id: insertedId }
  }
})

export const updatePatient = new ValidatedMethod({
  name: "updatePatient",
  validate({ patient }) {
    const result = v.validate(patient, schema.patient)
    if (!result.valid) throw new ValidationError()
  },
  run({ patient }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Not authorized",
        "You must sign in to update a patient"
      )
    }
    if (!patient._id) {
      throw new Meteor.Error(
        "Patient has no _id!",
        "You must give patient an _id"
      )
    }

    Patients.update(patient._id, { $set: patient })

    Meteor.users.update(this.userId, {
      $addToSet: { "profile.coveredPatients": patient._id }
    })
    return { _id: patient._id }
  }
})

export const addPatientToSelf = new ValidatedMethod({
  name: "addPatientToSelf",
  validate({ patientId }) {
    const r = v.validate(patientId, schema.patientId)
    if (!r.valid) throw new ValidationError()
  },
  run({ patientId }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Handoff error",
        "Error adding patient to yourself"
      )
    }
    Meteor.users.update(
      { _id: this.userId },
      {
        $addToSet: {
          "profile.coveredPatients": patientId
        }
      }
    )
  }
})

export const addPatientsToUser = new ValidatedMethod({
  name: "addPatientsToUser",
  validate({ patientIdList, otherUserId }) {
    const r1 = v.validate(patientIdList, schema.patientIdList)
    const r2 = v.validate(otherUserId, schema.userId)
    if (!r1.valid || !r2.valid) throw new ValidationError()
  },
  run({ patientIdList, otherUserId }) {
    if (!this.userId) {
      throw new Meteor.Error(
        "Handoff error",
        "You must be logged in to handoff patients"
      )
    }
    Meteor.users.update(
      { _id: otherUserId },
      {
        $addToSet: {
          "profile.coveredPatients": { $each: patientIdList }
        }
      }
    )
  }
})

export const removePatientsFromUser = new ValidatedMethod({
  name: "removePatientsFromUser",
  validate({ patientIdList, userId }) {
    const result = v.validate(patientIdList, schema.patientIdList)
    if (!result.valid) throw new ValidationError()
  },
  run({ patientIdList, userId }) {
    if (userId !== Meteor.userId()) {
      throw new Meteor.Error("Handoff error", "Error removing patients")
    }
    Meteor.users.update(
      { _id: userId },
      {
        $pullAll: {
          "profile.coveredPatients": patientIdList
        }
      }
    )
  }
})
