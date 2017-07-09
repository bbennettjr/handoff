// Atmosphere and NPM
import { Meteor } from 'meteor/meteor';
import React from 'react';
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

export const NewPatient = props => {
	return (
		<Grid>
			<form>
				<Row>
					<Col xs={6}>
						<FieldGroup
							id="formControlsText"
							type="text"
							label="First Name"
							placeholder="Enter first name"
						/>
					</Col>
					<Col xs={6}>
						<FieldGroup
							id="formControlsText"
							type="text"
							label="Last Name"
							placeholder="Enter last name"
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={6}>
						<FieldGroup
							id="formControlsText"
							type="text"
							label="Diagnosis"
							placeholder="Enter diagnosis"
						/>
					</Col>
					<Col xs={6}>
						<FormGroup>
							<ControlLabel>Level of Care</ControlLabel>
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
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col xs={6}>
						<FieldGroup
							id="formControlsText"
							type="text"
							label="Condition"
							placeholder="Enter condition"
						/>
					</Col>
					<Col xs={6}>
						<FieldGroup
							id="formControlsText"
							type="text"
							label="Vitals"
							placeholder="Enter vitals"
						/>
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
							/>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>

						<FormGroup controlId="formControlsTextarea">
							<ControlLabel>Past Medical History</ControlLabel>
							<FormControl
								componentClass="textarea"
								placeholder="PMH"
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
							/>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col xs={6}>
						<FieldGroup
							id="formControlsText"
							type="text"
							label="To Do"
							placeholder="Enter To Do's"
						/>
					</Col>
					<Col xs={6}>
						<FieldGroup
							id="formControlsText"
							type="text"
							label="Cover"
							placeholder="Enter cover"
						/>
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
							<Button bsStyle="success">Success</Button>
						</ButtonToolbar>
					</Col>
				</Row>
			</form>
		</Grid>
	);
};

function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}
