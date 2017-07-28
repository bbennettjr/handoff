import React from "react"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import { Link } from "react-router-dom"
import FlatButton from "material-ui/FlatButton"

const PatientCard = ({ url, patient, ...appProps }) => {
  return (
    <Link to={url} key={patient._id}>
      <Card>
        <CardHeader
          title={`${patient.first} ${patient.last}`}
          subtitle={`${patient.diagnosis}, condition: ${patient.condition}`}
          showExpandableButton={false}
          children={
            <FlatButton
              label="Remove"
              primary={true}
              onClick={e => appProps.onClick(patient._id)}
            />
          }
        />
        <CardText expandable={true}>
          {patient.todo}
        </CardText>
      </Card>
    </Link>
  )
}

export default PatientCard
