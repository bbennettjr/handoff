import { Meteor } from "meteor/meteor"
import React from "react"
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"
import DropDownMenu from "material-ui/DropDownMenu"
import MenuItem from "material-ui/MenuItem"
import { Link } from "react-router-dom"

import { Patients } from "../../../../api/patients/patients.js"
import { createContainer } from "meteor/react-meteor-data"
import PropTypes from "prop-types"
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

	signOffToThisUser(userId) {
		Meteor.call("addAllPatientsToOtherUserId", userId)
	}

	renderUsers() {
		let users = this.props.users

		return users.map(user => {
			return (
				<MenuItem
					label={user.emails[0].address}
					onClick={() => this.signOffToThisUser(user._id)}
					key={user._id}
				/>
			)
		})
	}
	render() {
		return (
			<div>
				<h3>
					Your Patients
					<DropDownMenu>
						{this.renderUsers()}
					</DropDownMenu>
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
