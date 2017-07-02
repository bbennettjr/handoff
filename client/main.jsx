// Atmosphere and NPM
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

// Accounts
import '../imports/startup/client/accounts-config.js';
import { App } from '../imports/ui/components/app/app.jsx';

// Main
import './main.html';

Meteor.startup(() => {
	// render to the root div
	ReactDOM.render(App(), document.getElementById('root'), (error, result) => {
		if (error) console.log('Error is: ' + error.reason);
		if (result) console.log('Result is ' + result);
	});
});
