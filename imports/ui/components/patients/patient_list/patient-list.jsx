import React from "react";
import { Panel } from "react-bootstrap";

class PatientList extends React.Component {
	renderPatients() {
		const patients = this.props.patients;
		return patients.map(patient => {
			<Panel header={`${patient.first} ${patient.last}`}>
				{`${patient.diagnosis}, condition: ${patient.condition}`}
			</Panel>;
		});
	}
	render() {
		return (
			<div>
				{this.renderPatients()}
			</div>
		);
	}
}
