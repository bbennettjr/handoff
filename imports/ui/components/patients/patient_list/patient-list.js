import { Meteor } from "meteor/meteor"
import React from "react"
import { Panel, DropdownButton, MenuItem } from "react-bootstrap"
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
	renderUsers() {
		let users = ["dan", "is", "way", "sexy"]
		return users.map(user => {
			return (
				<MenuItem>
					{user}
				</MenuItem>
			)
		})
	}
	render() {
		return (
			<div>
				<h3>
					Your Patients
					<DropdownButton pullRight>{this.renderUsers()}</DropdownButton>
				</h3>
				{this.renderPatients()}
			</div>
		)
	}
}

export default createContainer(() => {
	let user = Meteor.user()
	let coveredPatients = []
	if (user && user.profile && user.profile.coveredPatients) {
		coveredPatients = user.profile.coveredPatients
	}
	const subscription = Meteor.subscribe("patients")
	// console.log(Patients.find().fetch())
	console.log("covertedPatients", coveredPatients)
	const patients = Patients.find({
		_id: { $in: coveredPatients }
	}).fetch()
	console.log(patients)
	return { patients }
}, PatientList)
