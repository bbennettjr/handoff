import React from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"

const AddPatientButton = () => {
  return (
    <Link
      to="/newpatient"
      style={{ position: "absolute", bottom: "40px", right: "40px" }}
    >
      <Button icon="plus-circle-o">New Patient </Button>
    </Link>
  )
}

export default AddPatientButton
