// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import "../notifications/notification-config.js"

// Components
import Navigation from "../navigation/navigation.js"
import PatientList from "../patients/patient_list/patient-list.js"
import AccountPage from "../accounts/AccountPage.js"
import { createContainer } from "meteor/react-meteor-data"
import NewPatientForm from "../patients/patient/new-patient-form"

import PrivacyPolicy from "../navigation/privacy-policy"
import TermsOfUse from "../navigation/terms-of-use"
// App Component
import { Layout } from "antd"
let { Header, Content, Footer } = Layout
class App extends React.Component {
	state = {
		selectedRowKeys: []
	}

	setSelectedRowKeys = selectedRowKeys => {
		this.setState({ selectedRowKeys })
	}

	componentWillReceiveProps(nextProps) {
		if (!nextProps.user) {
			this.setState({ selectedRowKeys: [] })
		}
	}

	render() {
		let { history, users, user, ...appProps } = this.props
		return (
			<Router history={history}>
				<Layout className="layout">
					<Header>
						<Navigation
							history={history}
							selectedRowKeys={this.state.selectedRowKeys}
							setSelectedRowKeys={this.setSelectedRowKeys}
							users={users}
						/>
					</Header>
					<Content style={{ padding: "30px 50px" }}>
						<Switch>
							<Route exact path="/newpatient" component={NewPatientForm} />
							<Route exact path="/account/:_id" component={AccountPage} />
							<Route exact path="/privacy-policy" component={PrivacyPolicy} />
							<Route exact path="/terms-of-use" component={TermsOfUse} />
							<Route
								path="/"
								component={() => (
									<PatientList
										users={users}
										{...appProps}
										selectedRowKeys={this.state.selectedRowKeys}
										setSelectedRowKeys={this.setSelectedRowKeys}
									/>
								)}
							/>
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

const history = createHistory()

export default createContainer(() => {
	Meteor.subscribe("allUsers")
	let users = Meteor.users.find().fetch()
	let user = Meteor.user()
	return { history, users, user }
}, App)
