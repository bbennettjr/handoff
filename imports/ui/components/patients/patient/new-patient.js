// Atmosphere and NPM
import { Meteor } from "meteor/meteor"
import React from "react"
import ReactDOM from "react-dom"
import { LinkContainer } from "react-router-bootstrap"
import {
	Grid,
	Row,
	Col,
	FormGroup,
	FormControl,
	ControlLabel,
	Radio,
	HelpBlock,
	Button,
	ButtonToolbar
} from "react-bootstrap"
import { withRouter } from "react-router"
class NewPatient extends React.Component {
	onSubmit(e) {
		e.preventDefault()

		// Build patient object. => ES6 style. for-of, destruc,
		// Object class methods and dynamic prop names
		const patient = {}
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
							<FormGroup controlId="formControlsText">
								<ControlLabel label="First Name" />
								<FormControl
									type="text"
									placeholder="Enter first name"
									ref="first"
								/>
							</FormGroup>
						</Col>
						<Col xs={6}>
							<FormGroup controlId="formControlsText">
								<ControlLabel label="Last Name" />
								<FormControl
									type="text"
									placeholder="Enter last name"
									ref="last"
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							<FormGroup controlId="formControlsText">
								<ControlLabel label="Diagnosis" />
								<FormControl
									type="text"
									placeholder="Enter diagnosis"
									ref="diagnosis"
								/>
							</FormGroup>
						</Col>
						<Col xs={6}>
							<FormGroup>
								<ControlLabel>Level of Care</ControlLabel>
								<div>
									<Radio name="radioGroup" inline>
										1
									</Radio>
									{" "}
									<Radio name="radioGroup" inline>
										2
									</Radio>
									{" "}
									<Radio name="radioGroup" inline>
										3
									</Radio>
								</div>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							<FormGroup controlId="formControlsText">
								<ControlLabel label="Condition" />
								<FormControl
									type="text"
									placeholder="Enter condition"
									ref="condition"
								/>
							</FormGroup>
						</Col>
						<Col xs={6}>
							<FormGroup controlId="formControlsText">
								<ControlLabel label="Vitals" />
								<FormControl
									type="text"
									placeholder="Enter vitals"
									ref="vitals"
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<FormGroup controlId="formControlsTextarea">
								<ControlLabel>
									History of Present Illness
								</ControlLabel>
								<FormControl
									componentClass="textarea"
									placeholder="HPI"
									ref="hpi"
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<FormGroup controlId="formControlsTextarea">
								<ControlLabel>
									Past Medical History
								</ControlLabel>
								<FormControl
									componentClass="textarea"
									placeholder="PMH"
									ref="pmh"
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>

							<FormGroup controlId="formControlsTextarea">
								<ControlLabel>Medications</ControlLabel>
								<FormControl
									componentClass="textarea"
									placeholder="Medications"
									ref="medications"
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={6}>
							<FormGroup controlId="formControlsText">
								<ControlLabel label="To Do" />
								<FormControl
									type="text"
									placeholder="Enter To Dos"
									ref="todo"
								/>
							</FormGroup>
						</Col>
						<Col xs={6}>
							<FormGroup controlId="formControlsText">
								<ControlLabel label="Cover" />
								<FormControl
									type="text"
									placeholder="Enter cover"
									ref="cover"
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col xs={6} xsOffset={6}>
							<ButtonToolbar>
								<LinkContainer to="/">
									<Button>
										Cancel
									</Button>
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

export default withRouter(NewPatient)
