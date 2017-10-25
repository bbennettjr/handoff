import { Medications } from "../../imports/api/medications/medications.js"
import medications from "./medications.json"

if (Medications.find().count() === 0) {
  for (let med of medications) {
    Medications.insert(med)
  }
}
