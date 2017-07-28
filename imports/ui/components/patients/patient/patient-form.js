// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import ReactDOM from "react-dom"
import { Grid, Row, Col } from "react-bootstrap"
import TextField from "material-ui/TextField"
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton"
import RaisedButton from "material-ui/RaisedButton"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import { Patients } from "../../../../api/patients/patients.js"
import { createContainer } from "meteor/react-meteor-data"
import PropTypes from "prop-types"
const style = {
	margin: 12
}

class PatientForm extends React.Component {
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
		for (const key in this.refs) {
			patient[key] = this.refs[key].getValue()
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
								onClick={e => this.onSubmit(e)}
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
		return { patient }
	}
	return {}
}, PatientForm)
