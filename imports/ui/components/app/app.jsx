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

// App Component
export const App = appProps => {
	return (
		<Router>
			<div className="App">
				<Navigation {...appProps} />
				<Grid>
					<Switch>
						<Route
							name="home"
							exact
							path="/"
							component={PatientList}
						/>
						<Route
							name="newpatient"
							path="/newpatient"
							component={NewPatient}
						/>
						<Route path="/patient/:_id" component={Patient} />
					</Switch>
				</Grid>
			</div>
		</Router>
	);
};

const NewPatient = props => {
	return (
		<div>
			<h1>New Patient</h1>
		</div>
	);
};
