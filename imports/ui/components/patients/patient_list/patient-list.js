import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { createContainer } from "meteor/react-meteor-data"

import { Patients } from "../../../../api/patients/patients.js"
import NoPatientsList from "./no-patients.js"
import AddNewPatientButton from "../patient/AddNewPatientButton"
import NewPatientForm from "./new-patient-list"
class PatientList extends React.Component {
	static propTypes = {
		patients: PropTypes.array.isRequired
	}
	renderPatientCards() {
		const patients = this.props.patients
		if (patients.length === 0) {
			return <NoPatientsList />
		}

		return <NewPatientForm patients={patients} />
	}

	render() {
		return (
			<div style={{ height: "100%" }}>
				{this.renderPatientCards()}
				<div>
					<AddNewPatientButton />
				</div>
			</div>
		)
	}
}

PatientList.propTypes = {
	patients: PropTypes.array.isRequired
}

export default createContainer(() => {
	let user = Meteor.user()
	let coveredPatients = []
	if (user && user.profile && user.profile.coveredPatients) {
		coveredPatients = user.profile.coveredPatients
	}
	Meteor.subscribe("patients")

	const patients = Patients.find({
		_id: { $in: coveredPatients }
	}).fetch()

	return { patients }
}, PatientList)
