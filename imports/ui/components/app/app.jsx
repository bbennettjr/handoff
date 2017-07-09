// Atmosphere and NPM
import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-komposer';
import { Grid } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom';

// Components
import { Navigation } from '../navigation/navigation.jsx';
import PatientList from '../patients/patient_list/patient-list.jsx';
import Patient from '../patients/patient/patient.jsx';
import { NewPatient } from '../patients/patient/new-patient.jsx';

// App Component
export const App = appProps => {
	return (
		<Router>
			<div className="App">
				<Navigation {...appProps} />
				<Grid>
					<Switch>
						<Route path="/patient/:_id" component={Patient} />
						<Route path="/team" component={Team} />
						<Route path="/cover" component={Cover} />

						<Route path="/newpatient" component={NewPatient} />
						<Route path="/" component={PatientList} />
					</Switch>
				</Grid>
			</div>
		</Router>
	);
};

// Placeholders
const Team = props => {
	return <h1>Your Team's Patients</h1>;
};
const Cover = props => {
	return <h1>Cover List</h1>;
};
