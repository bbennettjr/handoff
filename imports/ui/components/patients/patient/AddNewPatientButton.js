import React from "react"
import { Link } from "react-router-dom"
import Button from "material-ui/Button"
import ContentAdd from "material-ui-icons/Add"

const AddPatientButton = () => {
  return (
    <Link
      to="/newpatient"
      style={{ position: "absolute", bottom: "40px", right: "40px" }}
    >
      <Button secondary={true}>
        <ContentAdd />
      </Button>
    </Link>
  )
}

export default AddPatientButton
