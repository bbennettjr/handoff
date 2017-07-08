import React from 'react';
import { Patients } from '../../../../api/patients/patients.js';
import { compose } from 'react-komposer';
import { Grid, Row, Col } from 'react-bootstrap';

const Patient = patient => {
	return (
		<Grid>
			<Row>
				<Col xs={4}>
					{`${patient.first} ${patient.last}
			${patient.diagnosis}`}
				</Col>
				<Col
					xs={8}
				>{`LOC: ${patient.loc} Condition: ${patient.condition}
				Vital Signs: ${patient.vitals}`}</Col>
			</Row>

			<Row>
				<Col xs={6}>
					{`HPI:
				${patient.hpi}`}
				</Col>
				<Col xs={6}>
					{`PMH:
				${patient.pmh}`}
				</Col>
			</Row>

			<Row>
				<Col xs={12}>
					{`Medications:
				meds`}
				</Col>
			</Row>

			<Row>
				<Col xs={6}>
					{`To Do:
				${patient.todo}`}
				</Col>
				<Col xs={6}>
					{`Cross Cover:
				${patient.crossCover}`}
				</Col>
			</Row>
		</Grid>
	);
};

function dataLoader(props, onData) {
	Meteor.subscribe('patient', props);
	const _id = props.match.params._id;
	const patient = Patients.findOne(_id);
	onData(null, patient);
}

export default compose(dataLoader)(Patient);
