// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom"
import createHistory from "history/createBrowserHistory"

// Components
import { Navigation } from "../navigation/navigation.js"
import PatientList from "../patients/patient_list/patient-list.js"
import PatientDisplay from "../patients/patient/patient-display.js"
import PatientForm from "../patients/patient/patient-form.js"
import { createContainer } from "meteor/react-meteor-data"

// App Component
const App = ({ history, users, ...appProps }) => {
	return (
		<MuiThemeProvider>
			<Router history={history}>
				<div className="App">
					<Navigation {...appProps} />
					<Switch>
						<Route path="/patient/:_id/edit" component={PatientForm} />
						<Route path="/patient/:_id" component={PatientDisplay} />
						<Route path="/newpatient" component={PatientForm} />
						<Route
							path="/"
							component={() => <PatientList users={users} {...appProps} />}
						/>
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
	)
}

const history = createHistory()

export default createContainer(() => {
	Meteor.subscribe("allUsers")
	let users = Meteor.users.find().fetch()
	return { history, users }
}, App)
