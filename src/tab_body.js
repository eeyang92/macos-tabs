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

type PrivateProps = Props & {
	display?: string
}

export default class TabBody extends Component {
	props: PrivateProps

	static defaultProps = {
		label: ''
	}

	render() {
		const display = (this.props.display) ? 'block' : 'none'

		return (
			<div id={ `macos-tab-body-${ this.props.tabId }` } style={{ height: '100%', display }}>
				{ this.props.children }
			</div>
		)
	}
}
