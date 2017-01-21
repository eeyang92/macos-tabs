// @flow
import React, { Component } from 'react'
import classnames from 'classnames'
import $ from 'jquery'
import isEqual from 'lodash.isequal'
import throttle from 'lodash.throttle'

import Tab from './tab'
import AddTabButton from './add_tab_button'

import VirtualTabs from './virtual_tabs'

import style from '../styles/tab_header.css'

type ID = number | string
type Tabs = Array<Object>
type Ref = null | HTMLElement
type Refs = Map<ID, HTMLElement>

type Props = {
	onSetActiveTab?: (index: number) => void,
	onAddTabButtonClick?: (e: Event) => void,
	onCloseTabButtonClick?: (e: Event, index: number) => void,
	onDragStop?: (e: Event, tabs: Tabs, index: number) => void,
	onDragOut?: (e: Event, index: number) => void,
	onTabClick?: (e: Event, index: number) => void,
	onMouseEnter?: (e: Event, index: number) => void,
	onMouseLeave?: (e: Event, index: number) => void,
	addTabPosition?: 'start' | 'end' | 'none',
	scrollX?: 'normal' | 'reversed' | 'disabled',
	scrollY?: 'normal' | 'reversed' | 'disabled',
	activeTabIndex: number,
	dragOutDistance: number,
	tabs: Tabs,
	styles: {
		addTabButton?: Object,
		closeTabButton?: Object,
		tab?: Object,
		tabActive?: Object,
		outerTabContainer?: Object,
		innerTabContainer?: Object
	},
	classNames: {
		addTabButton?: string,
		closeTabButton?: string,
		tab?: string,
		tabActive?: string,
		outerTabContainer?: string,
		innerTabContainer?: string
	},
	icons: {
		addTabButton?: Object | string,
		closeTabButton?: Object | string
	}
}

type State = {
	tabs: Tabs
}

export default class TabHeader extends Component {
	props: Props
	state: State

	id: ID
	tabBarRef: Ref
	tabRefs: Refs
	virtualTabs: null | VirtualTabs

	onScroll: () => void

	static defaultProps = {
		scrollX: 'normal',
		scrollY: 'disabled',
		addTabPosition: 'end',
		activeTabIndex: 0,
		tabs: [],
		dragOutDistance: 40,
		styles: {},
		classNames: {},
		icons: {}
	}

	constructor(props: Props) {
		super(props)

		this.id = 0
		this.tabBarRef = null
		this.tabRefs = new Map()
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
				styles={ this.props.styles }
				classNames={ this.props.classNames }
				icons={ this.props.icons }
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

	onAddTabButtonClick(e: Event) {
		if (this.props.onAddTabButtonClick) {
			this.props.onAddTabButtonClick(e)
		}
	}

	focusTab(index: number, ms: number) {
		const id = this.props.tabs[index].props.tabId

		const $tab = $(this.tabRefs.get(id))
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

	onCloseTabButtonClick(id: ID, e: Event) {
		const closedTabIndex = this.findTabIndexById(id)

		if (closedTabIndex > -1) {
			if (this.props.onCloseTabButtonClick) {
				this.props.onCloseTabButtonClick(e, closedTabIndex)
			}
		}
	}

	onTabClick(id: ID, e: Event) {
		const index = this.findTabIndexById(id)

		if (this.props.onTabClick) {
			this.props.onTabClick(e, index)
		}
	}

	onMouseEnter(id: ID, e: Event) {
		const index = this.findTabIndexById(id)

		if (this.props.onMouseEnter) {
			this.props.onMouseEnter(e, index)
		}
	}

	onMouseLeave(id: ID, e: Event) {
		const index = this.findTabIndexById(id)

		if (this.props.onMouseLeave) {
			this.props.onMouseLeave(e, index)
		}
	}

	onTabMouseDown(id: ID, e: Event) {
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

	onScroll(e: Event) {
		const deltaX = e.originalEvent.deltaX
		const deltaY = e.originalEvent.deltaY
		const $target = $('.innerTabScrollSelector')

		if (this.props.scrollX !== 'normal') {
			e.preventDefault()
		}

		if (this.props.scrollX === 'reversed') {
			$target.scrollLeft($target.scrollLeft() - deltaX)
		}

		if (this.props.scrollY === 'normal') {
			$target.scrollLeft($target.scrollLeft() - deltaY)
		} else if (this.props.scrollY === 'reversed') {
			$target.scrollLeft($target.scrollLeft() + deltaY)
		}
	}

	onGetRef(id: ID, ref: Ref) {
		if (ref) {
			this.tabRefs.set(id, ref)
		} else if (this.tabRefs.has(id)) {
			this.tabRefs.delete(id)
		}
	}

	onDragOut(e: Event, data: Object, index: number) {
		if (this.props.onDragOut) {
			this.props.onDragOut(e, index)
		}
	}

	onDragStart(id: ID, e: Event, data: Object) {
		this.virtualTabs = new VirtualTabs(this.props.tabs, this.tabRefs, id)
	}

	onDrag(id: ID, e: Event, data: Object) {
		if (data.y > this.props.dragOutDistance || data.y < -this.props.dragOutDistance) {
			const index = this.findTabIndexById(id)

			this.onDragOut(e, data, index)
		}

		if (this.virtualTabs) {
			this.virtualTabs.move(data.x)
		}
	}

	onDragStop(e: Event, data: Object) {
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
				this.props.onDragStop(e, newTabs, nextActiveTabIndex)
			}

			this.virtualTabs = null
		}
	}

	resetTabPositions() {
		for (const key of this.tabRefs.keys()) {
			// const index = this.findTabIndexById(key)
			const $ref = $(this.tabRefs.get(key))

			if ($ref.css('transition') !== 'transform 0.0s linear' || $ref.css('transform') !== 'translate(0px, 0px)') {
				// if (index === this.props.activeTabIndex) {
				// 	$ref.css({
				// 		transform: 'translate(0px, 0px)'
				// 	})
				// } else {
				$ref.css({
					transition: 'transform 0.0s linear',
					transform: 'translate(0px, 0px)'
				})
				// }
			}
		}
	}

	render() {
		const tabs = this.renderTabs(this.props.tabs)
		const outerTabClassName = classnames('outerTabContainerSelector', style.macOSTabs, this.props.classNames.outerTabContainer)
		const innerTabClassName = classnames('innerTabScrollSelector', style.macOSTabs, style.macOSTabsInner, this.props.classNames.innerTabContainer)
		const addTabButton = (
			<AddTabButton
				onClick={ this.onAddTabButtonClick.bind(this) }
				style={ this.props.styles.addTabButton }
				className={ this.props.classNames.addTabButton }
				icon={ this.props.icons.addTabButton }
			/>
		)

		return (
			<ul className={ outerTabClassName } style={ this.props.styles.outerTabContainer }>
				{ this.props.addTabPosition === 'start' && addTabButton }
				<ul
					className={ innerTabClassName }
					style={ this.props.styles.innerTabContainer }
					ref={ (input) => this.onTabBarRef(input) }
				>
					{ tabs }
				</ul>
				{ this.props.addTabPosition === 'end' && addTabButton }
			</ul>
		)
	}
}
