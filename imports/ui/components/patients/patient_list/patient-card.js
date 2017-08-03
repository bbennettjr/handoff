import React from "react"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import Checkbox from "material-ui/Checkbox"
import { Link } from "react-router-dom"
import Button from "material-ui/Button"

class PatientCard extends React.Component {
  onClick(e) {
    e.stopPropagation()
    e.preventDefault()
    const userId = Meteor.userId()
    Meteor.call("removePatientFromUser", this.props.patient._id, userId)
  }
  render() {
    let { patient, url, ...appProps } = this.props
    return (
      <Link to={url} key={patient._id}>
        <Card style={{ display: "inline-flex", alginItems: "center" }}>
          <Checkbox />
          <CardHeader
            title={`${patient.first} ${patient.last}`}
            subtitle={`${patient.diagnosis}, condition: ${patient.condition}`}
            showExpandableButton={false}
            children={
              <Button primary={true} onClick={e => this.onClick(e)}>
                Remove
              </Button>
            }
          />
          <CardText expandable={true}>
            {patient.todo}
          </CardText>
        </Card>
      </Link>
    )
  }
}

export default PatientCard
