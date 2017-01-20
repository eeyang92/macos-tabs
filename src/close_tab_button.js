// @flow
import React, { Component } from 'react'
import classnames from 'classnames'

import styles from '../styles/tab.css'

type Props = {
	onClick: (e: Event) => void,
	style: Object,
	className?: string,
	icon?: Object | string
}

export default class CloseTabButton extends Component {
	props: Props

	static defaultProps = {
		style: {}
	}

	onClick(e: Event) {
		if (this.props.onClick) {
			e.stopPropagation()

			this.props.onClick(e)
		}
	}

	onMouseDown(e: Event) {
		e.stopPropagation()
	}

	render() {
		const className = classnames('closeTabButton', styles.macOSCloseTabButton, this.props.className)

		return (
			<div
				className={ className }
				onClick={ this.onClick.bind(this) }
				onMouseDown={ this.onMouseDown.bind(this) }
				style={ this.props.style }
			>
				{ (this.props.icon) ? this.props.icon : '×' }
			</div>
		)
	}
}
