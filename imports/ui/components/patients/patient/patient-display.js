import React from "react"
import { Patients } from "../../../../api/patients/patients.js"
import { compose } from "react-komposer"
import { Grid, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Button from "material-ui/Button"

const style = {
	margin: 12
}

const PatientDisplay = patient => {
	return (
		<Grid>
			<Row>
				<Col xs={12}>
					<Button
						raised={true}
						style={style}
						component={Link}
						to={`/patient/${patient._id}/edit`}
					>
						Edit
					</Button>
				</Col>
			</Row>
			<Row>
				<Col xs={4}>
					{`${patient.first} ${patient.last}
			${patient.diagnosis}`}
				</Col>
				<Col xs={8}>{`LOC: ${patient.loc} Condition: ${patient.condition}
				Vital Signs: ${patient.vitals}`}</Col>
			</Row>

			<Row>
				<Col xs={6}>
					{`HPI:
				${patient.hpi}`}
				</Col>
				<Col xs={6}>
					{`PMH:
				${patient.pmh}`}
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					{`Medications:
				${patient.medications}`}
				</Col>
			</Row>

			<Row>
				<Col xs={6}>
					{`To Do:
				${patient.todo}`}
				</Col>
				<Col xs={6}>
					{`Cross Cover:
				${patient.cover}`}
				</Col>
			</Row>
		</Grid>
	)
}

function dataLoader(props, onData) {
	Meteor.subscribe("patient", props)
	const _id = props.match.params._id
	const patient = Patients.findOne(_id)
	onData(null, patient)
}

export default compose(dataLoader)(PatientDisplay)
