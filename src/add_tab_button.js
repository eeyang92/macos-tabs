// @flow
import React, { Component } from 'react'

import styles from '../styles/add_tab_button.css'

type Props = {
	onClick: (e: Object) => void
}

export default class AddTabButton extends Component {
	props: Props

	onClick(e: Object) {
		if (this.props.onClick) {
			this.props.onClick(e)
		}
	}

	render() {
		return (
			<li className={ styles.macOSAddTabButton } onClick={ this.onClick.bind(this) }>
				+
			</li>
		)
	}
}
