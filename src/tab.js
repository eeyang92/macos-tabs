// @flow

import React, { Component } from 'react'
import classnames from 'classnames'
import $ from 'jquery'
import Draggable from 'react-draggable'

import CloseTabButton from './close_tab_button'

import styles from '../styles/tab.css'

type ID = number
type CloseTabButtonPosition = 'start' | 'end' | 'none'
type Ref = null | HTMLElement

type Props = {
	id: ID,
	closeTabButtonPosition: CloseTabButtonPosition,
	onCloseTabButtonClick?: (e: Object) => void,
	onClick?: (e: Object) => void,
	onMouseDown?: (e: Object) => void,
	onDragStart?: (e: Object, data: Object) => void | false,
	onDrag?: (e: Object, data: Object) => void | false,
	onDragStop?: (e: Object, data: Object) => void | false,
	onMouseEnter?: (e: Object) => void,
	onMouseLeave?: (e: Object) => void,
	getRef?: (ref: Ref) => void,
	label: string,
	active: boolean
}

export default class Tab extends Component {
	props: Props

	static defaultProps = {
		closeTabButtonPosition: 'start',
		label: '',
		active: false
	}

	onDragStart(e: Object, data: Object) {
		if (this.props.onDragStart) {
			this.props.onDragStart(e, data)
		}
	}

	onDrag(e: Object, data: Object) {
		// this.onClick()

		if (this.props.onDrag) {
			this.props.onDrag(e, data)
		}
	}

	onDragStop(e: Object, data: Object) {
		if (this.props.onDragStop) {
			this.props.onDragStop(e, data)
		}
	}

	onMouseEnter(e: Object) {
		if (this.props.onMouseEnter) {
			this.props.onMouseEnter(e)
		}
		// Hover for hotkeys?
	}

	onMouseLeave(e: Object) {
		if (this.props.onMouseLeave) {
			this.props.onMouseLeave(e)
		}
	}

	onClick(e: Object) {
		if (e) {
			// e.stopPropagation()
			// e.preventDefault()

			if (this.props.onClick) {
				this.props.onClick(e)
			}
		}
	}

	onMouseDown(e: Object) {
		if (e) {
			// e.stopPropagation()
			// e.preventDefault()

			if (this.props.onMouseDown) {
				this.props.onMouseDown(e)
			}
		}
	}

	onCloseTabButtonClick(e: Object) {
		if (this.props.onCloseTabButtonClick) {
			this.props.onCloseTabButtonClick(e)
		}
	}

	getRef(ref: Ref) {
		if (this.props.getRef) {
			this.props.getRef(ref)
		}
	}

	render() {
		const id = this.props.id
		const macOSTabClassName = classnames(styles.macOSTabNormal, (this.props.active) ? styles.macOSTabActive : '', styles.macOSTabDummy)

		return (
			<Draggable
				id={ `draggable_tabs_${ id }` }
				axis='x'
				cancel='.closeTabButton'
				zIndex={ 50 }
				bounds={ $('.outerTabSelector').get()[0] }
				onStart={ this.onDragStart.bind(this) }
				onDrag={ this.onDrag.bind(this) }
				onStop={ this.onDragStop.bind(this) }
				position={{ x: 0, y: 0 }}
				offsetParent={ $('.innerTabScrollSelector').get()[0] }
				onMouseDown={ this.onMouseDown.bind(this) }
			>
				<li
					className={ macOSTabClassName }
					onClick={ this.onClick.bind(this) }
					onMouseEnter={ this.onMouseEnter.bind(this) }
					onMouseLeave={ this.onMouseLeave.bind(this) }
					ref={ this.getRef.bind(this) }
				>
					{ this.props.closeTabButtonPosition === 'start' &&
						<CloseTabButton onClick={ this.onCloseTabButtonClick.bind(this) } />
					}
					<div style={{ height: '100%', paddingTop: '1px' }}>
						{ this.props.label }
					</div>
					{ this.props.closeTabButtonPosition === 'end' &&
						<CloseTabButton onClick={ this.onCloseTabButtonClick.bind(this) } />
					}
				</li>
			</Draggable>
		)
	}
}
