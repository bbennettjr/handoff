import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Panel } from 'react-bootstrap';
import { compose } from 'react-komposer';
import { Patients } from '../../../../api/patients/patients.js';

class PatientList extends React.Component {
	renderPatients() {
		const patients = this.props.patients;
		return patients.map(patient => {
			return (
				<Panel header={`${patient.first} ${patient.last}`}>
					{`${patient.diagnosis}, condition: ${patient.condition}`}
				</Panel>
			);
		});
	}
	render() {
		return (
			<div>
				<h1>Patient list</h1>
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
