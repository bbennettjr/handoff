import { Meteor } from "meteor/meteor"
import React from "react"
import { Panel } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { compose } from "react-komposer"
import { Patients } from "../../../../api/patients/patients.js"
import { createContainer } from "meteor/react-meteor-data"

class PatientList extends React.Component {
	renderPatients() {
		const patients = this.props.patients
		return patients.map(patient => {
			const url = `/patient/${patient._id}`
			return (
				<LinkContainer to={url} key={patient._id}>
					<Panel
						header={`${patient.first} ${patient.last}`}
						style={{ cursor: "pointer" }}
					>
						{`${patient.diagnosis}, condition: ${patient.condition}`}
					</Panel>
				</LinkContainer>
			)
		})
	}
	render() {
		return (
			<div>
				<h3>Your Patients</h3>
				{this.renderPatients()}
			</div>
		)
	}
}

export default createContainer(() => {
	const subscription = Meteor.subscribe("patients")
	const patients = Patients.find({}).fetch()
	return { patients }
}, PatientList)
