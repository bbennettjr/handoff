// Atmosphere and NPM
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { LinkContainer } from 'react-router-bootstrap';
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
} from 'react-bootstrap';

export class NewPatient extends React.Component {
	onSubmit(e) {
		e.preventDefault();

		// Build patient object. => Can we build this with ES6 key: value methods,
		// destructuring, variable key creation and for-of?
		// Evaluate to shorten this code
		const patient = {
			first: ReactDOM.findDOMNode(this.refs.first).value,
			last: ReactDOM.findDOMNode(this.refs.last).value,
			diagnosis: ReactDOM.findDOMNode(this.refs.diagnosis).value,
			loc: ReactDOM.findDOMNode(this.refs.loc).value,
			condition: ReactDOM.findDOMNode(this.refs.condition).value,
			vitals: ReactDOM.findDOMNode(this.refs.vitals).value,
			hpi: ReactDOM.findDOMNode(this.refs.hpi).value,
			pmh: ReactDOM.findDOMNode(this.refs.pmh).value,
			meds: ReactDOM.findDOMNode(this.refs.meds).value,
			todo: ReactDOM.findDOMNode(this.refs.todo).value,
			cover: ReactDOM.findDOMNode(this.refs.cover).value
		};

		// Meteor insert method
	}
	render() {
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
									{' '}
									<Radio name="radioGroup" inline>
										2
									</Radio>
									{' '}
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
								<Button
									bsStyle="success"
									onClick={e => this.onSubmit(e)}
								>
									Success
								</Button>
							</ButtonToolbar>
						</Col>
					</Row>
				</form>
			</Grid>
		);
	}
}
