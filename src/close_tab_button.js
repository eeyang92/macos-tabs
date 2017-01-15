// @flow
import React, { Component } from 'react'
import classnames from 'classnames'

import styles from '../styles/tab.css'

type Props = {
	onClick: (e: Object) => void
}

export default class CloseTabButton extends Component {
	props: Props

	onClick(e: Object) {
		if (this.props.onClick) {
			e.stopPropagation()

			this.props.onClick(e)
		}
	}

	onMouseDown(e: Object) {
		e.stopPropagation()
	}

	render() {
		const closeTabButtonClassName = classnames('closeTabButton', styles.macOSCloseTabButton)

		return (
			<div
				className={ closeTabButtonClassName }
				onClick={ this.onClick.bind(this) }
				onMouseDown={ this.onMouseDown.bind(this) }
			>
				<div
					id='macos_tabs_close_tab_button_inner_div'
					style={{ marginTop: '-5px', marginLeft: '-1px' }}
				>
					x
				</div>
			</div>
		)
	}
}
