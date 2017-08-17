import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { createContainer } from "meteor/react-meteor-data"

import { Patients } from "../../../../api/patients/patients.js"
import NoPatientsList from "./no-patients.js"
import PatientCard from "./patient-card.js"
import AddNewPatientButton from "../patient/AddNewPatientButton"

import Grid from "material-ui/Grid"

class PatientList extends React.Component {
	renderPatientCards() {
		const patients = this.props.patients
		if (patients.length === 0) {
			return <NoPatientsList />
		}

		return patients.map(patient => {
			const url = `/patient/${patient._id}`
			return (
				<Grid item xs={12} key={patient._id}>
					<PatientCard key={patient._id} url={url} patient={patient} />
				</Grid>
			)
		})
	}

	render() {
		const classes = this.props.classes
		console.log(classes)
		return (
			<Grid
				container
				style={{
					flexGrow: 1,
					padding: "20px 24px",
					backgroundColor: "#EEEEEE"
				}}
				direction="column"
				justify="flex-start"
				align="stretch"
				spacing={0}
			>
				<h3 style={{ marginLeft: "20px" }}>
					Your Patients
				</h3>
				{this.renderPatientCards()}
				<div><AddNewPatientButton /></div>
			</Grid>
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
