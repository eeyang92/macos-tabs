// @flow
import React, { Component } from 'react'
import classnames from 'classnames'
import $ from 'jquery'
import isEqual from 'lodash.isequal'
import throttle from 'lodash.throttle'

import Tab from './tab'
import AddTabButton from './add_tab_button'

import VirtualTabs from './virtual_tabs'

import styles from '../styles/tab_header.css'

type ID = number | string
type Tabs = Array<Object>

type Props = {
	onSetActiveTab?: (index: number) => void,
	onAddTabButtonClick?: (e: Object, tabs: Tabs) => void,
	onCloseTabButtonClick?: (e: Object, tabs: Tabs, closedTabIndex: number) => void,
	onDragStop?: (e: Object, data: Object, tabs: Tabs, nextActiveTabIndex: number) => void,
	onDragOut?: (e: Object, data: Object, tabs: Tabs, index: number) => void,
	onTabClick?: (e: Object, index: number) => void,
	onMouseEnter?: (e: Object, index: number) => void,
	onMouseLeave?: (e: Object, index: number) => void,
	addTabPosition?: 'start' | 'end' | 'none',
	activeTabIndex: number,
	dragOutDistance: number,
	tabs: Tabs
}

type State = {
	tabs: Tabs
}

type Ref = null | HTMLElement
type Refs = { [key: ID | string ]: HTMLElement }

export default class TabHeader extends Component {
	props: Props
	state: State

	id: ID
	tabBarRef: Ref
	tabRefs: Refs
	virtualTabs: null | VirtualTabs

	onScroll: () => void

	static defaultProps = {
		addTabPosition: 'end',
		activeTabIndex: 0,
		tabs: [],
		dragOutDistance: 40
	}

	constructor(props: Props) {
		super(props)

		this.id = 0
		this.tabBarRef = null
		this.tabRefs = {}
		this.virtualTabs = null

		this.onScroll = throttle(this.onScroll, 4, { leading: true }).bind(this)
	}

	componentDidUpdate(prevProps: Props) {
		if (!isEqual(prevProps.tabs, this.props.tabs)) {
			this.resetTabPositions()
		}

		if (prevProps.activeTabIndex !== this.props.activeTabIndex) {
			if (this.props.tabs.length && this.props.activeTabIndex > -1) {
				this.focusTab(this.props.activeTabIndex, 300)
			}
		}
	}

	renderTab(index: number) {
		const id = this.props.tabs[index].props.tabId
		const label = this.props.tabs[index].props.label

		return (
			<Tab
				key={ id }
				id={ id }
				onCloseTabButtonClick={ this.onCloseTabButtonClick.bind(this, id) }
				onDragStart={ this.onDragStart.bind(this, id) }
				onDrag={ this.onDrag.bind(this, id) }
				onDragStop={ this.onDragStop.bind(this) }
				getRef={ this.onGetRef.bind(this, id) }
				label={ label }
				onMouseEnter={ this.onMouseEnter.bind(this, id) }
				onMouseLeave={ this.onMouseLeave.bind(this, id) }
				onClick={ this.onTabClick.bind(this, id) }
				onMouseDown={ this.onTabMouseDown.bind(this, id) }
				active={ this.props.activeTabIndex === index}
			/>
		)
	}

	renderTabs(tabs: Tabs) {
		const renderList = []

		for (let index = 0; index < tabs.length; index++) {
			renderList.push(this.renderTab(index))
		}

		return renderList
	}

	onAddTabButtonClick(e: Object) {
		const currentTabs = this.props.tabs.slice(0)

		if (this.props.onAddTabButtonClick) {
			this.props.onAddTabButtonClick(e, currentTabs)
		}
	}

	focusTab(index: number, ms: number) {
		const id = this.props.tabs[index].props.tabId

		const $tab = $(this.tabRefs[id])
		const position = $tab.position().left
		const width = $tab.width()

		const $innerTabScrollSelector = $('.innerTabScrollSelector')
		const innerTabScrollSelectorWidth = $innerTabScrollSelector.width()

		if (position < 0) {
			$innerTabScrollSelector.animate({
				scrollLeft: $innerTabScrollSelector.scrollLeft() + position
			}, ms)
		} else if (position + width > innerTabScrollSelectorWidth) {
			$innerTabScrollSelector.animate({
				scrollLeft: $innerTabScrollSelector.scrollLeft() + (position + width) - innerTabScrollSelectorWidth + 2
			}, ms)
		}
	}

	setActiveTab(index: number) {
		if (this.props.onSetActiveTab) {
			this.props.onSetActiveTab(index)
		}
	}

	onCloseTabButtonClick(id: ID, e: Object) {
		const closedTabIndex = this.findTabIndexById(id)

		if (closedTabIndex > -1) {
			const currentTabs = this.props.tabs.slice(0)

			if (this.props.onCloseTabButtonClick) {
				this.props.onCloseTabButtonClick(e, currentTabs, closedTabIndex)
			}
		}
	}

	onTabClick(id: ID, e: Object) {
		const index = this.findTabIndexById(id)

		if (this.props.onTabClick) {
			this.props.onTabClick(e, index)
		}
	}

	onMouseEnter(id: ID, e: Object) {
		const index = this.findTabIndexById(id)

		if (this.props.onMouseEnter) {
			this.props.onMouseEnter(e, index)
		}
	}

	onMouseLeave(id: ID, e: Object) {
		const index = this.findTabIndexById(id)

		if (this.props.onMouseLeave) {
			this.props.onMouseLeave(e, index)
		}
	}

	onTabMouseDown(id: ID, e: Object) {
		const index = this.findTabIndexById(id)

		this.setActiveTab(index)
	}

	findTabIndexById(id: ID): number {
		for (let index = 0; index < this.props.tabs.length; index++) {
			if (id === this.props.tabs[index].props.tabId) {
				return index
			}
		}

		return -1
	}

	findTabIdByIndex(index: number): ID {
		if (!this.props.tabs[index]) {
			return -1
		}

		return this.props.tabs[index].props.tabId
	}

	onTabBarRef(ref: Ref) {
		this.tabBarRef = ref

		$(ref).on('mousewheel', this.onScroll)
	}

	onScroll(e: Object) {
		// console.log($(e.target).scrollLeft())
		// const deltaX = e.originalEvent.deltaX
		// console.log(e.originalEvent.deltaX)

		// const $innerTabScrollSelector = $('.innerTabScrollSelector')
		// console.log('should scroll to: ', $innerTabScrollSelector.scrollLeft() + deltaX)

		// $innerTabScrollSelector.scrollLeft($innerTabScrollSelector.scrollLeft() + deltaX)
	}

	onGetRef(id: ID, ref: Ref) {
		if (ref) {
			this.tabRefs[id] = ref
		} else if (this.tabRefs[id]) {
			delete this.tabRefs[id]
		}
	}

	onDragOut(e: Object, data: Object, tabs: Tabs, index: number) {
		if (this.props.onDragOut) {
			this.props.onDragOut(e, data, tabs, index)
		}
	}

	onDragStart(id: ID, e: Object, data: Object) {
		this.virtualTabs = new VirtualTabs(this.props.tabs, this.tabRefs, id)
	}

	onDrag(id: ID, e: Object, data: Object) {
		if (data.y > this.props.dragOutDistance || data.y < -this.props.dragOutDistance) {
			const index = this.findTabIndexById(id)

			this.onDragOut(e, data, this.props.tabs.slice(0), index)
		}

		if (this.virtualTabs) {
			this.virtualTabs.move(data.x)
		}
	}

	onDragStop(e: Object, data: Object) {
		if (this.virtualTabs) {
			const idOrder = this.virtualTabs.getTabIds()
			const newTabs = []

			for (const tabId of idOrder) {
				const tabIndex = this.props.tabs.findIndex((tab) => tabId === tab.props.tabId)

				newTabs.push(this.props.tabs[tabIndex])
			}

			const currentActiveTabId = this.findTabIdByIndex(this.props.activeTabIndex)
			const nextActiveTabIndex = newTabs.findIndex((tab) => tab.props.tabId === currentActiveTabId)

			if (this.props.onDragStop) {
				this.props.onDragStop(e, data, newTabs, nextActiveTabIndex)
			}

			this.virtualTabs = null
		}
	}

	resetTabPositions() {
		for (const key in this.tabRefs) {
			const $ref = $(this.tabRefs[key])

			if ($ref.css('transition') !== 'transform 0.0s linear' || $ref.css('transform') !== 'translate(0px, 0px)') {
				$ref.css({
					transition: 'transform 0.0s linear',
					transform: 'translate(0px, 0px)'
				})
			}
		}
	}

	render() {
		const tabs = this.renderTabs(this.props.tabs)
		const outerTabStyle = classnames('outerTabSelector', styles.macOSTabs)
		const innerTabStyle = classnames('innerTabScrollSelector', styles.macOSTabs, styles.macOSTabsInner)

		return (
			<ul className={ outerTabStyle }>
				{ this.props.addTabPosition === 'start' &&
					<AddTabButton onClick={ this.onAddTabButtonClick.bind(this) } />
				}
				<ul
					className={ innerTabStyle }
					ref={ (input) => this.onTabBarRef(input) }
				>
					{ tabs }
				</ul>
				{ this.props.addTabPosition === 'end' &&
					<AddTabButton onClick={ this.onAddTabButtonClick.bind(this) } />
				}
			</ul>
		)
	}
}
