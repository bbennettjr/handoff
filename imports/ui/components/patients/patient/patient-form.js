// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import ReactDOM from "react-dom"
import { LinkContainer } from "react-router-bootstrap"
import { Grid, Row, Col } from "react-bootstrap"
import TextField from "material-ui/TextField"
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton"
import { withRouter } from "react-router"
import { Patients } from "../../../../api/patients/patients.js"
import { createContainer } from "meteor/react-meteor-data"

class PatientForm extends React.Component {
	onSubmit(e) {
		e.preventDefault()

		debugger

		// Build patient object. => ES6 style. for-of, destruc,
		// Object class methods and dynamic prop names
		const patient = { doctors: new Set([Meteor.userId()]) }
		for (const [key, val] of Object.entries(this.refs)) {
			Object.assign(patient, { [key]: ReactDOM.findDOMNode(val).value })
		}

		// Meteor insert method
		Meteor.call("patient.insert", patient, (error, result) => {
			if (error) {
				console.log(error.reason)
			}
			if (result._id) {
				console.log("Patient _id: " + result._id)
				this.props.history.push("/")
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
								defaultValue={this.patient ? this.patient.first : ""}
								ref="first"
							/>
						</Col>
						<Col xs={6}>
							<TextField
								hintText="Enter last name"
								floatingLabelText="Last Name"
								defaultValue={this.patient ? this.patient.last : ""}
								ref="last"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							{" "}<TextField
								hintText="Enter diagnosis"
								floatingLabelText="Diagnosis"
								defaultValue={this.patient ? this.patient.diagnosis : ""}
								ref="diagnosis"
							/>
						</Col>
						<Col xs={6}>
							<RadioButtonGroup
								name="advancedDirective"
								defaultSelected="fullCode"
								ref="loc"
							>
								<RadioButton value="fullCode" label="Full Code" />
								<RadioButton value="dnr" label="Do Not Resuscitate" />
								<RadioButton value="dni" label="Do Not Intubate" />{" "}
								<RadioButton
									value="dnr_dni"
									label="Do Not Resuscitate & Do Not Intubate"
								/>
								<RadioButton
									value="comfortMeasures"
									label="Comfort Measures Only"
								/>
							</RadioButtonGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							<TextField
								hintText="Enter condition"
								floatingLabelText="Condition"
								defaultValue={this.patient ? this.patient.condition : ""}
								ref="condition"
							/>
						</Col>
						<Col xs={6}>
							<TextField
								hintText="Enter vitals"
								floatingLabelText="Vitals"
								defaultValue={this.patient ? this.patient.vitals : ""}
								ref="vitals"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<TextField
								hintText="Enter history of present Illness"
								floatingLabelText="History of Present Illness"
								defaultValue={this.patient ? this.patient.hpi : ""}
								multiLine={true}
								ref="hpi"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<TextField
								hintText="Enter past medical history"
								floatingLabelText="Past Medical History"
								defaultValue={this.patient ? this.patient.pmh : ""}
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
								defaultValue={this.patient ? this.patient.medications : ""}
								multiLine={true}
								ref="medications"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							<TextField
								hintText="Enter to do next morning"
								floatingLabelText="To Do"
								defaultValue={this.patient ? this.patient.todo : ""}
								multiLine={true}
								ref="todo"
							/>
						</Col>
						<Col xs={6}>
							<TextField
								hintText="Enter coverage to do"
								floatingLabelText="Coverage To Do"
								defaultValue={this.patient ? this.patient.cover : ""}
								multiLine={true}
								ref="cover"
							/>
						</Col>
					</Row>
					<Row>
						<Col xs={6} xsOffset={6}>
							<ButtonToolbar>
								<LinkContainer to="/">
									<Button>Cancel</Button>
								</LinkContainer>
								<Button bsStyle="success" onClick={e => this.onSubmit(e)}>
									Success
								</Button>
							</ButtonToolbar>
						</Col>
					</Row>
				</form>
			</Grid>
		)
	}
}

export default createContainer(({ match }) => {
	debugger
	const _id = match.params._id
	if (_id) {
		Meteor.subscribe("patient", match)
		const patient = Patient.findOne(_id)
		return { patient }
	}
}, PatientForm)
