// @flow
import React, { Component } from 'react'
import classnames from 'classnames'

import style_ from '../styles/add_tab_button.css'

type Props = {
	onClick: (e: Event) => void,
	style?: Object,
	className?: string
}

export default class AddTabButton extends Component {
	props: Props

	onClick(e: Object) {
		if (this.props.onClick) {
			this.props.onClick(e)
		}
	}

	render() {
		const className = classnames(style_.macOSAddTabButton, this.props.className)

		return (
			<li
				className={ className }
				style={ this.props.style }
				onClick={ this.onClick.bind(this) }
			>
				+
			</li>
		)
	}
}
