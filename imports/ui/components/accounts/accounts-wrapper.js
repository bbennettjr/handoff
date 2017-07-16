import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating';
import React, { Component } from 'react';

export default class AccountsWrapper extends React.Component {
	componentDidMount() {
		this.view = Blaze.render(Template.loginButtons, this.mySpan);
	}

	componentWillUnmount() {
		Blaze.remove(this.view);
	}

	render() {
		return (
			<div>
				<span ref={mySpan => this.mySpan = mySpan} />
			</div>
		);
	}
}