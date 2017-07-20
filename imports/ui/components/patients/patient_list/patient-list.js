import { Meteor } from "meteor/meteor"
import React from "react"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"
import DropDownMenu from "material-ui/DropDownMenu"
import MenuItem from "material-ui/MenuItem"
import { Link } from "react-router-dom"
import { createContainer } from "meteor/react-meteor-data"

import { Patients } from "../../../../api/patients/patients.js"
import DoctorsMenu from "../../doctors/doctors-menu.js"

class PatientList extends React.Component {
	renderPatients() {
		const patients = this.props.patients
		return patients.map(patient => {
			const url = `/patient/${patient._id}`
			return (
				<Link to={url} key={patient._id}>
					<Card>
						<CardHeader
							title={`${patient.first} ${patient.last}`}
							subtitle={`${patient.diagnosis}, condition: ${patient.condition}`}
							showExpandableButton={true}
						/>
						<CardText expandable={true}>{patient.todo}</CardText>
					</Card>
				</Link>
			)
		})
	}

	render() {
		return (
			<div>
				<h3>
					Your Patients
					<DoctorsMenu users={this.props.users} />
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

	const patients = Patients.find({
		_id: { $in: coveredPatients }
	}).fetch()

	return { patients }
}, PatientList)
