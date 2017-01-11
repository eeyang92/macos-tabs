// @flow
import React, { Component } from 'react'

type Props = {
	label?: string | number,
	children?: null | Object,
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
