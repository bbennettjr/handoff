import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "material-ui/styles"
import Card, { CardHeader, CardContent } from "material-ui/Card"
import Typography from "material-ui/Typography"
import Checkbox from "material-ui/Checkbox"
import { Link } from "react-router-dom"
import Button from "material-ui/Button"

const styles = {
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  controls: {
    display: "flex",
    alignItems: "right"
  }
}

const PatientCard = ({ patient, classes, ...props }) => {
  return (
    <Link to={props.url} key={patient._id}>
      <Card className={classes.card}>
        <Checkbox />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography type="headline">
              {`${patient.first} ${patient.last}`}
            </Typography>
            <Typography type="subheading">
              {`Condition: ${patient.condition}
          Diagnosis: ${patient.diagnosis}`}
            </Typography>
          </CardContent>
        </div>

        <div className={classes.controls}>
          <Button
            color="primary"
            dense={true}
            onClick={e => onClick(e, patient._id)}
          >
            Remove
          </Button>
        </div>
      </Card>
    </Link>
  )
}

const onClick = (e, patientId) => {
  e.stopPropagation()
  e.preventDefault()
  const userId = Meteor.userId()
  Meteor.call("removePatientFromUser", patientId, userId)
}

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PatientCard)
