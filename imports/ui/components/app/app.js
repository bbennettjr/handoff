// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import injectTapEventPlugin from "react-tap-event-plugin"
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom"

// Components
import { Navigation } from "../navigation/navigation.js"
import PatientList from "../patients/patient_list/patient-list.js"
import Patient from "../patients/patient/patient.js"
import NewPatient from "../patients/patient/new-patient.js"
import { createContainer } from "meteor/react-meteor-data"

// App Component
const App = appProps => {
	return (
		<MuiThemeProvider>
			<Router>
				<div className="App">
					<Navigation {...appProps} />
					<Switch>
						<Route path="/patient/:_id" component={Patient} />

						<Route path="/newpatient" component={NewPatient} />
						<Route
							path="/"
							component={() => <PatientList users={appProps.users} />}
						/>
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
	)
}

export default createContainer(() => {
	Meteor.subscribe("allUsers")
	let users = Meteor.users.find().fetch()
	return { users }
}, App)
