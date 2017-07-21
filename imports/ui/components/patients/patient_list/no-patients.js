import React from "react"
import Paper from "material-ui/Paper"
import Subheader from "material-ui/Subheader"
import { Link } from "react-router-dom"
import FloatingActionButton from "material-ui/FloatingActionButton"
import ContentAdd from "material-ui/svg-icons/content/add"

const style = {
  left: 0,
  right: 0,
  margin: 20,
  textAlign: "center",
  display: "inline-block",
  position: "absolute"
}

const NoPatientsList = () => {
  return (
    <Paper style={style} zDepth={1}>
      <Subheader>You have no Patients. Add a patient below.</Subheader>
      <Link to="/newpatient">
        <FloatingActionButton secondary={true}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </Paper>
  )
}

export default NoPatientsList
