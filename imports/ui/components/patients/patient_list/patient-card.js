import React from "react"
import Card, { CardHeader, CardContent } from "material-ui/Card"
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
        <Card
          style={{
            display: "inline-flex",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Checkbox />
          <CardHeader
            title={`${patient.first} ${patient.last}`}
            subheader={`${patient.diagnosis}, condition: ${patient.condition}`}
            children={
              <Button primary={true} onClick={e => this.onClick(e)}>
                Remove
              </Button>
            }
          />
          <CardContent>
            {patient.todo}
          </CardContent>
        </Card>
      </Link>
    )
  }
}

export default PatientCard
