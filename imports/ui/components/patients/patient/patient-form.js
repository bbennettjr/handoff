// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import { Grid, Row, Col } from "react-bootstrap"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import { Link } from "react-router-dom"
import { Patients } from "../../../../api/patients/patients.js"
import { createContainer } from "meteor/react-meteor-data"
import PropTypes from "prop-types"
const style = {
	margin: 12
}

class PatientForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			first: props.patient ? props.patient.first : "",
			last: props.patient ? props.patient.last : "",
			diagnosis: props.patient ? props.patient.diagnosis : "",
			condition: props.patient ? props.patient.condition : "",
			vitals: props.patient ? props.patient.vitals : "",
			hpi: props.patient ? props.patient.hpi : "",
			medications: props.patient ? props.patient.medications : "",
			pmh: props.patient ? props.patient.pmh : "",
			todo: props.patient ? props.patient.todo : "",
			cover: props.patient ? props.patient.cover : ""
		}
	}
	onSubmit(e) {
		e.preventDefault()
		// debugger

		let patient = {}
		let meteorCall = ""
		// if Edit
		if (!!this.props.patient) {
			patient = Object.assign({}, this.props.patient)
			meteorCall = "patient.update"
		} else {
			// if new
			patient = { doctors: [Meteor.userId()] }
			meteorCall = "patient.insert"
		}

		// Build patient object. => ES6 style. for-of, destruc,
		// Object class methods and dynamic prop names
		for (const key in this.state) {
			patient[key] = this.state[key]
		}
		// Meteor insert method
		Meteor.call(meteorCall, patient, (error, result) => {
			// console.log(result)
			if (error) {
				console.log(error.reason)
			}

			this.props.history.push("/")
		})
	}
	render() {
		// console.log(this.props.history)
		return (
			<Grid>
				<form>
					<Row>
						<Col xs={6}>
							<TextField
								value={this.state.first}
								onChange={e => this.setState({ first: e.target.value })}
								label="First Name"
							/>
						</Col>
						<Col xs={6}>
							<TextField
								value={this.state.last}
								onChange={e => this.setState({ last: e.target.value })}
								label="Last Name"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							{" "}
							<TextField
								value={this.state.diagnosis}
								onChange={e => this.setState({ diagnosis: e.target.value })}
								label="Diagnosis"
							/>
						</Col>
						<Col xs={6} />
					</Row>
					<Row>
						<Col xs={6}>
							<TextField
								value={this.state.condition}
								onChange={e => this.setState({ condition: e.target.value })}
								label="Condition"
							/>
						</Col>
						<Col xs={6}>
							<TextField
								value={this.state.vitals}
								onChange={e => this.setState({ vitals: e.target.value })}
								label="Vitals"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<TextField
								value={this.state.hpi}
								onChange={e => this.setState({ hpi: e.target.value })}
								label="History of Present Illness"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<TextField
								value={this.state.pmh}
								onChange={e => this.setState({ pmh: e.target.value })}
								label="Past Medical History"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<TextField
								value={this.state.medications}
								onChange={e => this.setState({ medications: e.target.value })}
								label="Medications"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							<TextField
								label="To Do"
								onChange={e => this.setState({ todo: e.target.value })}
							/>
						</Col>
						<Col xs={6}>
							<TextField
								value={this.state.cover}
								onChange={e => this.setState({ cover: e.target.value })}
								label="Coverage To Do"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6} xsOffset={6}>
							<Button
								raised={true}
								style={style}
								containerElement={
									<Link
										to={
											this.props.patient
												? `/patient/${this.props.patient._id}`
												: "/"
										}
									/>
								}
							>
								Cancel
							</Button>
							<Button
								raised={true}
								style={style}
								onClick={e => this.onSubmit(e)}
							>
								Save
							</Button>
						</Col>
					</Row>
				</form>
			</Grid>
		)
	}
}

export default createContainer(({ ...props }) => {
	const _id = props.match.params._id
	if (_id) {
		Meteor.subscribe("patient", props)
		const patient = Patients.findOne(_id)
		return { patient }
	}
	return {}
}, PatientForm)
