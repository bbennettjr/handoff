// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import createHistory from "history/createBrowserHistory"

// Components
import Navigation from "../navigation/navigation.js"
import PatientList from "../patients/patient_list/patient-list.js"
import PatientDisplay from "../patients/patient/patient-display.js"
import PatientForm from "../patients/patient/patient-form.js"
import AccountPage from "../accounts/AccountPage.js"
import { createContainer } from "meteor/react-meteor-data"
import NewPatientForm from "../patients/patient/new-patient-form"
// App Component

import { Layout } from "antd"
let { Header, Content, Footer } = Layout
const App = ({ history, users, ...appProps }) => {
	return (
		<Router history={history}>
			<Layout className="layout">
				<Header>
					<Navigation history={history} />
				</Header>
				<Content style={{ padding: "30px 50px" }}>
					<Switch>
						<Route exact path="/patient/:_id/edit" component={PatientForm} />
						<Route exact path="/patient/:_id" component={PatientDisplay} />
						<Route exact path="/newpatient" component={NewPatientForm} />
						<Route exact path="/account/:_id" component={AccountPage} />
						<Route
							path="/"
							component={() => <PatientList users={users} {...appProps} />}
						/>
					</Switch>
				</Content>
			</Layout>
		</Router>
	)
}

const history = createHistory()

export default createContainer(() => {
	Meteor.subscribe("allUsers")
	let users = Meteor.users.find().fetch()
	return { history, users }
}, App)
