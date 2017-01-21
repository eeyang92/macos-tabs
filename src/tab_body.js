// @flow
import React, { Component } from 'react'

type Props = {
	// Label that will be displayed on the tab header
	label: string | number,

	// Children components to render
	children?: HTMLElement | Component<*, *, *>,

	// Unique tabId
	tabId: string | number,

	// Optional styles/classnames

	// Set additional TabBody styles
	// Note: In most cases, setting styles on the child component is sufficient
	style?: Object,

	// Set TabBody classname
	className?: string
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
			<div
				id={ `macos-tab-body-${ this.props.tabId }` }
				className={ this.props.className }
				style={{ height: '100%', display, ...this.props.style }}
			>
				{ this.props.children }
			</div>
		)
	}
}
