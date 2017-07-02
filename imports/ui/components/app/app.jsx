// Atmosphere and NPM
import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import { Grid } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom';
import { Navigation } from '../navigation';

// App Component
const App = appProps => {
	return (
		<Router>
			<div className="App">
				<Navigation {...appProps} />
				<Grid>
					<Switch />
				</Grid>
			</div>
		</Router>
	);
};

export App;