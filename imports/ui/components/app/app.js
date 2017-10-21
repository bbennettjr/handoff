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
import { Layout, Menu, Icon } from "antd"
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

import { Link } from "react-router-dom"

class App extends React.Component {
	state = {
		collapsed: false,
		isMobile: window.innerWidth < 768 ? true : false
	}
	onCollapse = collapsed => {
		this.setState({ collapsed })
	}

	updateDimensions = () => {
		let isMobile = window.innerWidth < 768 ? true : false
		this.setState({ isMobile: isMobile, collapsed: isMobile })
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions)
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
							{Meteor.user() && (
								<Menu.Item key="sub2">
									<Link to={`/`}>
										<span>
											<Icon type="team" />
											<span>Patient List</span>
										</span>
									</Link>
								</Menu.Item>
							)}
							{Meteor.user() && (
								<Menu.Item key="1">
									<Link to="/newpatient">
										<Icon type="user-add" />
										<span>New Patient</span>
									</Link>
								</Menu.Item>
							)}

							{Meteor.user() && (
								<Menu.Item key="sub1">
									<Link to={`/account/${Meteor.user()._id}`}>
										<span>
											<Icon type="user" />
											<span>Account</span>
										</span>
									</Link>
								</Menu.Item>
							)}
						</Menu>
					</Sider>

					<Layout className="layout">
						<Header>
							<Navigation isMobile={this.state.isMobile} />
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
