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
	closeTabButtonPosition?: CloseTabButtonPosition,
	onCloseTabButtonClick?: (e: Event) => void,
	onClick?: (e: Event) => void,
	onMouseDown?: (e: Event) => void,
	onDragStart?: (e: Event, data: Object) => void | false,
	onDrag?: (e: Event, data: Object) => void | false,
	onDragStop?: (e: Event, data: Object) => void | false,
	onMouseEnter?: (e: Event) => void,
	onMouseLeave?: (e: Event) => void,
	getRef?: (ref: Ref) => void,
	label?: string,
	active?: boolean
}

class Tab extends Component {
	props: Props

	static defaultProps = {
		closeTabButtonPosition: 'start',
		label: '',
		active: false
	}

	onDragStart(e: Event, data: Object) {
		if (this.props.onDragStart) {
			this.props.onDragStart(e, data)
		}
	}

	onDrag(e: Event, data: Object) {
		// this.onClick()

		if (this.props.onDrag) {
			this.props.onDrag(e, data)
		}
	}

	onDragStop(e: Event, data: Object) {
		if (this.props.onDragStop) {
			this.props.onDragStop(e, data)
		}
	}

	onMouseEnter(e: Event) {
		if (this.props.onMouseEnter) {
			this.props.onMouseEnter(e)
		}
	}

	onMouseLeave(e: Event) {
		if (this.props.onMouseLeave) {
			this.props.onMouseLeave(e)
		}
	}

	onClick(e: Event) {
		if (e) {
			// e.stopPropagation()
			// e.preventDefault()

			if (this.props.onClick) {
				this.props.onClick(e)
			}
		}
	}

	onMouseDown(e: Event) {
		if (e) {
			// e.stopPropagation()
			// e.preventDefault()

			if (this.props.onMouseDown) {
				this.props.onMouseDown(e)
			}
		}
	}

	onCloseTabButtonClick(e: Event) {
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
					<div className={ styles.macOSTabLabel }>
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

Tab.propTypes = {
	id: React.PropTypes.number.isRequired
}

export default Tab
