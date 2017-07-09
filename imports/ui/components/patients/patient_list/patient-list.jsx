import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Panel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { compose } from 'react-komposer';
import { Patients } from '../../../../api/patients/patients.js';

class PatientList extends React.Component {
	renderPatients() {
		const patients = this.props.patients;
		return patients.map(patient => {
			const url = `/patient/${patient._id}`;
			return (
				<LinkContainer to={url}>
					<Panel header={`${patient.first} ${patient.last}`}>
						{`${patient.diagnosis}, condition: ${patient.condition}`}
					</Panel>
				</LinkContainer>
			);
		});
	}
	render() {
		return (
			<div>
				<h3>Your Patients</h3>
				{this.renderPatients()}
			</div>
		);
	}
}

function dataLoader(props, onData) {
	const subscription = Meteor.subscribe('patients');
	const patients = Patients.find({}).fetch();
	onData(null, { patients });
}

const options = {
	loadingHandler: () => <h1>Loading...</h1>
};

export default compose(dataLoader, options)(PatientList);
