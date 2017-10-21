// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "../notifications/notification-config.js"

// Components
import Navigation from "../navigation/navigation.js"
import PatientList from "../patients/patient_list/patient-list.js"
import AccountPage from "../accounts/AccountPage.js"
import NewPatientForm from "../patients/patient/new-patient-form"

import PrivacyPolicy from "../navigation/privacy-policy"
import TermsOfUse from "../navigation/terms-of-use"
// App Component
import { Layout } from "antd"
let { Header, Content, Footer } = Layout

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Layout className="layout">
					<Header>
						<Navigation />
					</Header>
					<Content style={{ padding: "30px 50px" }}>
						<Switch>
							<Route exact path="/newpatient" component={NewPatientForm} />
							<Route exact path="/account/:_id" component={AccountPage} />
							<Route exact path="/privacy-policy" component={PrivacyPolicy} />
							<Route exact path="/terms-of-use" component={TermsOfUse} />
							<Route path="/" component={PatientList} />
						</Switch>
					</Content>
					<Footer style={{ textAlign: "center" }}>
						<h3 style={{ color: "red" }}>Online Demo</h3>
						{"Handoff © 2017. All Rights Reserved."}
					</Footer>
				</Layout>
			</Router>
		)
	}
}
