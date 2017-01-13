// @flow
import React, { Component } from 'react'

type Props = {
	// Label that will be diplayed on the tab header
	label?: string | number,

	// Children components to render
	children?: Object,

	// Unique tabId
	tabId: string | number
}

export default class TabBody extends Component {
	props: Props

	static defaultProps = {
		label: '',
		children: null
	}

	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		)
	}
}
