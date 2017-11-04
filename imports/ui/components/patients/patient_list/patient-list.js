import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { createContainer } from "meteor/react-meteor-data"

import { Patients } from "/imports/api/patients/patients.js"
import NoPatientsList from "./no-patients.js"
import LoggedOutBanner from "./LoggedOutBanner.js"
import NewPatientList from "./new-patient-list"
import NewPatientButtons from "/imports/ui/components/patients/patient_list/new-patient-buttons"
class PatientList extends React.Component {
	static propTypes = {
		patients: PropTypes.array.isRequired,
		users: PropTypes.array.isRequired
	}

	state = {
		selectedRowKeys: []
	}

	setSelectedRowKeys = selectedRowKeys => {
		this.setState({ selectedRowKeys })
	}

	renderPatientCards() {
		if (!this.props.user) return <LoggedOutBanner />

		const patients = this.props.patients
		if (patients.length === 0) {
			return <NoPatientsList />
		}

		return (
			<div>
				<NewPatientButtons
					selectedRowKeys={this.state.selectedRowKeys}
					setSelectedRowKeys={this.setSelectedRowKeys}
					users={this.props.users}
				/>
				<NewPatientList
					patients={patients}
					selectedRowKeys={this.state.selectedRowKeys}
					setSelectedRowKeys={this.setSelectedRowKeys}
				/>
			</div>
		)
	}

	render() {
		return <div style={{ height: "100%" }}>{this.renderPatientCards()}</div>
	}
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

	Meteor.subscribe("allUsers")
	let users = Meteor.users.find().fetch()
	return { users, user, patients }
}, PatientList)
