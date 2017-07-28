import React from "react"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import { Link } from "react-router-dom"
import FlatButton from "material-ui/FlatButton"

class PatientCard extends React.Component {
  onClick(e) {
    e.stopPropagation()
    const userId = Meteor.userId()
    Meteor.call("removePatientFromUser", this.props.patient._id, userId)
  }
  render() {
    let { patient, url, ...appProps } = this.props
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
                onClick={e => this.onClick(e)}
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
}

export default PatientCard
