import { Meteor } from "meteor/meteor"
import React from "react"
import FlatButton from "material-ui/FlatButton"
import DropDownMenu from "material-ui/DropDownMenu"
import MenuItem from "material-ui/MenuItem"
import { createContainer } from "meteor/react-meteor-data"

import { Patients } from "../../../../api/patients/patients.js"
import NoPatientsList from "./no-patients.js"
import PatientCard from "./patient-card.js"
import DoctorsMenu from "../../doctors/doctors-menu.js"

class PatientList extends React.Component {
	renderPatientCards() {
		const patients = this.props.patients
		return patients.length === 0
			? <NoPatientsList />
			: patients.map(patient => {
					const url = `/patient/${patient._id}`
					return <PatientCard url={url} patient={patient} />
				})
	}

	render() {
		return (
			<div>
				<h3>
					Your Patients
					<DoctorsMenu users={this.props.users} />
				</h3>
				{this.renderPatientCards()}
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
