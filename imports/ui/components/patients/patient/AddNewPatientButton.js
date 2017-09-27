import React from "react"
import { Link } from "react-router-dom"
import { Button } from "antd"

const AddPatientButton = () => {
  return (
    <Link
      to="/newpatient"
      style={{ position: "absolute", bottom: "40px", right: "40px" }}
    >
      <Button icon="search" />
    </Link>
  )
}

export default AddPatientButton
