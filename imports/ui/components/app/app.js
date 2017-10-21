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
import { createContainer } from "meteor/react-meteor-data"
// App Component
import { Layout, Menu, Breadcrumb, Icon } from "antd"
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

import { Link } from "react-router-dom"

class App extends React.Component {
	state = {
		collapsed: false
	}
	onCollapse = collapsed => {
		this.setState({ collapsed })
	}

	render() {
		return (
			<Router>
				<Layout style={{ minHeight: "100vh" }}>
					<Sider
						collapsible
						collapsed={this.state.collapsed}
						onCollapse={this.onCollapse}
					>
						<div
							className="logo"
							style={{
								height: "64px",
								color: "white",
								display: "flex",
								alignItems: "center",
								fontSize: "20px",
								marginLeft: "20px"
							}}
						>
							<Link
								to="/"
								style={{
									cursor: "pointer",
									color: "white",
									textDecoration: "none"
								}}
							>
								Handoff
							</Link>
						</div>
						<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
							<Menu.Item key="1">
								<Icon type="pie-chart" />
								<span>Option 1</span>
							</Menu.Item>
							<Menu.Item key="2">
								<Icon type="desktop" />
								<span>Option 2</span>
							</Menu.Item>
							<SubMenu
								key="sub1"
								title={
									<span>
										<Icon type="user" />
										<span>User</span>
									</span>
								}
							>
								<Menu.Item key="3">Tom</Menu.Item>
								<Menu.Item key="4">Bill</Menu.Item>
								<Menu.Item key="5">Alex</Menu.Item>
							</SubMenu>
							<SubMenu
								key="sub2"
								title={
									<span>
										<Icon type="team" />
										<span>Team</span>
									</span>
								}
							>
								<Menu.Item key="6">Team 1</Menu.Item>
								<Menu.Item key="8">Team 2</Menu.Item>
							</SubMenu>
							<Menu.Item key="9">
								<Icon type="file" />
								<span>File</span>
							</Menu.Item>
						</Menu>
					</Sider>

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
				</Layout>
			</Router>
		)
	}
}

export default createContainer(() => {
	let user = Meteor.user()
	return { user }
}, App)
