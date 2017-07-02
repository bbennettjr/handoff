// Atmosphere and NPM
import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { composeWithTracker } from 'react-komposer';
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

// App Component
export const App = appProps => {
	return (
		<Router>
			<div className="App">
				<Navigation {...appProps} />
				<Grid>
					<Switch>
						<Route name="home" path="/" />
						<Route name="newpatient" path="/newpatient" />
					</Switch>
				</Grid>
			</div>
		</Router>
	);
};
