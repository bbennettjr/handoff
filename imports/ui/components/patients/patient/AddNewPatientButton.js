import React from "react"
import Paper from "material-ui/Paper"
import Subheader from "material-ui/Subheader"
import { Link } from "react-router-dom"
import FloatingActionButton from "material-ui/FloatingActionButton"
import ContentAdd from "material-ui/svg-icons/content/add"

const AddPatientButton = () => {
  return (
    <Link
      to="/newpatient"
      style={{ position: "absolute", bottom: "40px", right: "40px" }}
    >
      <FloatingActionButton secondary={true}>
        <ContentAdd />
      </FloatingActionButton>
    </Link>
  )
}

export default AddPatientButton
