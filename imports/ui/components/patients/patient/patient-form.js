// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import ReactDOM from "react-dom"
import { LinkContainer } from "react-router-bootstrap"
import { Grid, Row, Col, ButtonToolbar, Button } from "react-bootstrap"
import TextField from "material-ui/TextField"
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton"
import RaisedButton from "material-ui/RaisedButton"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import { Patients } from "../../../../api/patients/patients.js"
import { createContainer } from "meteor/react-meteor-data"

const style = {
	margin: 12
}

class PatientForm extends React.Component {
	onSubmit(e) {
		e.preventDefault()

		// Build patient object. => ES6 style. for-of, destruc,
		// Object class methods and dynamic prop names
		const patient = { doctors: new Set([Meteor.userId()]) }
		for (const [key, val] of Object.entries(this.refs)) {
			Object.assign(patient, { [key]: ReactDOM.findDOMNode(val).value })
		}

		debugger

		// Meteor insert method
		Meteor.call("patient.insert", patient, (error, result) => {
			if (error) {
				console.log(error.reason)
			}
			if (result._id) {
				console.log("Patient _id: " + result._id)
				this.props.history.push(`/patient/${this.props.patient._id}`)
			}
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
								hintText="Enter first name"
								floatingLabelText="First Name"
								defaultValue={
									this.props.patient ? this.props.patient.first : ""
								}
								ref="first"
							/>
						</Col>
						<Col xs={6}>
							<TextField
								hintText="Enter last name"
								floatingLabelText="Last Name"
								defaultValue={this.props.patient ? this.props.patient.last : ""}
								ref="last"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							{" "}
							<TextField
								hintText="Enter diagnosis"
								floatingLabelText="Diagnosis"
								defaultValue={
									this.props.patient ? this.props.patient.diagnosis : ""
								}
								ref="diagnosis"
							/>
						</Col>
						<Col xs={6} />
					</Row>
					<Row>
						<Col xs={6}>
							<TextField
								hintText="Enter condition"
								floatingLabelText="Condition"
								defaultValue={
									this.props.patient ? this.props.patient.condition : ""
								}
								ref="condition"
							/>
						</Col>
						<Col xs={6}>
							<TextField
								hintText="Enter vitals"
								floatingLabelText="Vitals"
								defaultValue={
									this.props.patient ? this.props.patient.vitals : ""
								}
								ref="vitals"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<TextField
								hintText="Enter HPI"
								floatingLabelText="History of Present Illness"
								defaultValue={this.props.patient ? this.props.patient.hpi : ""}
								multiLine={true}
								ref="hpi"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<TextField
								hintText="Enter PMH"
								floatingLabelText="Past Medical History"
								defaultValue={this.props.patient ? this.props.patient.pmh : ""}
								multiLine={true}
								ref="pmh"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<TextField
								hintText="Enter medications"
								floatingLabelText="Medications"
								defaultValue={
									this.props.patient ? this.props.patient.medications : ""
								}
								multiLine={true}
								ref="medications"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							<TextField
								hintText="Enter morning to do"
								floatingLabelText="To Do"
								defaultValue={this.props.patient ? this.props.patient.todo : ""}
								multiLine={true}
								ref="todo"
							/>
						</Col>
						<Col xs={6}>
							<TextField
								hintText="Enter coverage to do"
								floatingLabelText="Coverage To Do"
								defaultValue={
									this.props.patient ? this.props.patient.cover : ""
								}
								multiLine={true}
								ref="cover"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6} xsOffset={6}>
							<RaisedButton
								label="Cancel"
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
							/>
							<RaisedButton
								label="Save"
								secondary={true}
								style={style}
								onTouchTap={e => this.onSubmit(e)}
							/>
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
		console.log(`Count of Patients collection: ${Patients.find({}).count()}
			returned patient: ${patient}`)
		return { patient }
	}
	return {}
}, PatientForm)