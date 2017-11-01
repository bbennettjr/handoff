import { Patients } from "./patients.js"
import { ValidatedMethod } from "meteor/mdg:validated-method"
import { Validator } from "jsonschema"
const v = new Validator()

const schemas = {
  patient: {
    type: "object",
    properties: {
      _id: { type: "string" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      name: { type: "string" },
      room: { type: "string" },
      diagnosis: { type: "string" },
      doctors: { type: "array", items: { type: "string" } },
      hpi: { type: "string" },
      pmh: { type: "string" },
      medications: { type: ["string", "array"], items: { type: "string" } },
      allergies: { type: "string" },
      vitals: { type: "string" },
      labs: { type: "string" },
      radiology: { type: "string" },
      plan: { type: "string" },
      todo: { type: "string" },
      coverage: { type: "string" },
      condition: { type: "string" },
      createdAt: { type: "date" },
      updatedAt: { type: "date" }
    },
    required: ["firstName", "lastName", "room", "diagnosis", "condition"]
  },
  patientId: { type: "string" },
  patientIdList: { type: "array", items: { type: "string" } },
  userId: { type: "string" }
}

// Validated methods
export const insertPatient = new ValidatedMethod({
  name: "insertPatient",
  validate({ patient }) {
    const result = v.validate(patient, schemas.patient)
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
    const result = v.validate(patient, schemas.patient)
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
    const r = v.validate(patientId, schemas.patientId)
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
    const r1 = v.validate(patientIdList, schemas.patientIdList)
    const r2 = v.validate(otherUserId, schemas.userId)
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
    const result = v.validate(patientIdList, schemas.patientIdList)
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

//   // update a patient
//   "patient.update"(patient) {
//     // check that a user is signed in
//     let userId = Meteor.userId()
//     if (!userId) {
//       throw new Meteor.Error(
//         "Not authorized",
//         "You must sign in to create a patient"
//       )
//     }

//     if (!patient._id) {
//       throw new Meteor.Error(
//         "Patient has no _id!",
//         "You must give patient an _id"
//       )
//     }

//     // update the patient
//     // kvothe: throwing Meteor.Error reason: "MinimongoError: Mod on _id not allowed"
//     // IDK what this is.
//     Patients.update(patient._id, { $set: patient })

//     Meteor.users.update(userId, {
//       $addToSet: { "profile.coveredPatients": patient._id }
//     })
//     return { _id: patient._id }
//   },
