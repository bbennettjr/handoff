import React from "react"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import { Link } from "react-router-dom"

const style = {
  left: 0,
  right: 0,
  margin: 20,
  display: "inline-block",
  position: "absolute"
}

const PatientCard = ({ url, patient, ...appProps }) => {
  return (
    <Link to={url} key={patient._id}>
      <Card style={style}>
        <CardHeader
          title={`${patient.first} ${patient.last}`}
          subtitle={`${patient.diagnosis}, condition: ${patient.condition}`}
          showExpandableButton={true}
        />
        <CardText expandable={true}>{patient.todo}</CardText>
      </Card>
    </Link>
  )
}

export default PatientCard
