// @flow

import React, { Component } from 'react'
import { render } from 'react-dom'
import $ from 'jquery'

import TabHeader from './tab_header'
import TabBody from './tab_body'

type ID = number | string
type Tabs = Array<Object>
type Event = Object

type Props = {
	// onClick event when the user clicks on a tab header
	onAddTabButtonClick?: (e: Event) => void,

	// onClick event when the user clicks on the close tab button on a tab header
	onCloseTabButtonClick?: (e: Event, closedTabIndex: number) => void,

	// Event when the user stops dragging a header
	// The updated tabs contain the new ordering, you can directly update your state with
	// these returned tabs
	onDragStop?: (e: Event, data: Object, tabs: Tabs, activeTabIndex: number) => void,

	// Event when the user clicks on a tab header
	// The index of the clicked header is passed back
	onTabClick?: (e: Event, index: number) => void,

	// Event when the activeTabIndex is updated internally
	// This allows you to keep track of the activeTabIndex even
	// if you are letting MacOSTabs handle the state
	onSetActiveTab?: (index: number) => void,

	// Specify the position of addTabButton
	addTabPosition: 'none' | 'start' | 'end',

	// Declare whether or not you want to manage the activeTabIndex
	autoActiveTab: boolean,

	// Can be used to set initial active tab index
	// If autoActiveTab is false, then you should have methods
	// to manage the activeTabIndex state
	activeTabIndex: number,

	// Tab content should be wrapped in a TabBody component with the correct props
	// Tabs order can be modified programmatically by manually changing the order
	// of the array
	tabs: Tabs,

	// Declare a div or react component to render when there are no tabs open
	defaultContent: Object,

	// Flag to show or hide tab headers
	showHeader: boolean,

	// Declare the header height in px (note: styles have not been tested with
	// anything but the default of 24px)
	headerHeight: number | string,

	// Declare a custom element that the body should be rendered into
	// instead of directly below the tab headers
	// i.e. <div id="tabBody" />
	customBodyElementId?: string,

	// Experimental/Not Completed
	onMouseEnter?: () => void,
	onMouseLeave?: () => void,
	onDragOut?: (e: Event, data: Object, outTabIndex: number) => void,
	dragOutDistance: number
}

type State = {
	activeTabIndex: number
}

export default class MacOSTabs extends Component {
	props: Props
	state: State

	id: ID
	mapping: Object

	static defaultProps = {
		tabs: [],
		addTabPosition: 'end',
		showHeader: true,
		headerHeight: 24,
		dragOutDistance: 40,
		autoActiveTab: true
	}

	constructor(props: Props) {
		super(props)

		this.state = {
			activeTabIndex: this.props.activeTabIndex || 0
		}
	}

	getActiveTabIndex() {
		let activeTabIndex = (typeof this.props.activeTabIndex === 'number') ? this.props.activeTabIndex : this.state.activeTabIndex

		if (activeTabIndex >= this.props.tabs.length) {
			activeTabIndex = this.props.tabs.length - 1
		}

		return activeTabIndex
	}

	setActiveTab(index: number) {
		if (this.props.autoActiveTab) {
			this.setState({
				activeTabIndex: index
			})
		}
	}

	onSetActiveTab(index: number) {
		if (this.props.onSetActiveTab) {
			this.props.onSetActiveTab(index)
		}

		this.setActiveTab(index)
	}

	onAddTabButtonClick(e: Event, tabs: Tabs) {
		if (this.props.onAddTabButtonClick) {
			this.props.onAddTabButtonClick(e)
		}

		this.setActiveTab(tabs.length) // Purposely set to last index + 1
	}

	onCloseTabButtonClick(e: Event, tabs: Tabs, closedTabIndex: number) {
		if (this.props.onCloseTabButtonClick) {
			this.props.onCloseTabButtonClick(e, closedTabIndex)
		}

		const activeTabIndex = this.getActiveTabIndex()

		if (closedTabIndex <= activeTabIndex) {
			this.onSetActiveTab((activeTabIndex === 0) ? 0 : activeTabIndex - 1)
		}
	}

	onDragOut(e: Event, data: Object, tabs: Tabs, index: number) {
		if (this.props.onDragOut) {
			this.props.onDragOut(e, data, index)
		}
	}

	onDragStop(e: Event, data: Object, tabs: Tabs, activeTabIndex: number) {
		if (this.props.onDragStop) {
			this.props.onDragStop(e, data, tabs, activeTabIndex)
		}

		this.onSetActiveTab(activeTabIndex)
	}

	onTabClick(e: Event, index: number) {
		if (this.props.onTabClick) {
			this.props.onTabClick(e, index)
		}

		this.onSetActiveTab(index)
	}

	onMouseEnter() {
		if (this.props.onMouseEnter) {
			this.props.onMouseEnter()
		}
	}

	onMouseLeave() {
		if (this.props.onMouseLeave) {
			this.props.onMouseLeave()
		}
	}

	shouldRenderHeader() {
		if (this.props.showHeader || this.props.tabs.length > 0) {
			return true
		}

		return false
	}

	formatHeight(height: number | string) {
		if (typeof height === 'number') {
			return `${ height }px`
		}

		return height
	}

	setTabVisibility() {
		if (this.props.tabs.length === 0) {
			return this.props.defaultContent
		}

		const toRender = []

		for (let i = 0; i < this.props.tabs.length; i++) {
			const tab = this.props.tabs[i]

			if (i === this.getActiveTabIndex()) {
				toRender.push(<TabBody display tabId={ tab.props.tabId } key={ tab.props.tabId }>{ tab.props.children }</TabBody>)
			} else {
				toRender.push(<TabBody tabId={ tab.props.tabId } key={ tab.props.tabId }>{ tab.props.children }</TabBody>)
			}
		}

		return toRender
	}

	renderCustomBodyElement() {
		const customBodyElementId = this.props.customBodyElementId

		if (customBodyElementId) {
			render(
				<div style={{ height: '100%' }}>{ this.setTabVisibility() }</div>,
				document.getElementById(customBodyElementId)
			)
		}
	}

	componentDidMount() {
		this.renderCustomBodyElement()
	}

	componentDidUpdate() {
		this.renderCustomBodyElement()
	}

	render() {
		const headerHeight = (this.shouldRenderHeader()) ? this.formatHeight(this.props.headerHeight) : 0
		const activeTabIndex = this.getActiveTabIndex()
		const shouldRenderFullHeight = (!this.props.customBodyElementId) ? { height: '100%' } : null

		return (
			<div style={ shouldRenderFullHeight }>
				{ this.shouldRenderHeader() &&
					<div style={{ height: headerHeight }}>
						<TabHeader
							onSetActiveTab={ this.onSetActiveTab.bind(this) }
							onAddTabButtonClick={ this.onAddTabButtonClick.bind(this) }
							onCloseTabButtonClick={ this.onCloseTabButtonClick.bind(this) }
							onDragOut={ this.onDragOut.bind(this) }
							dragOutDistance={ this.props.dragOutDistance }
							onDragStop={ this.onDragStop.bind(this) }
							onTabClick={ this.onTabClick.bind(this) }
							onMouseEnter={ this.onMouseEnter.bind(this) }
							onMouseLeave={ this.onMouseLeave.bind(this) }
							activeTabIndex={ activeTabIndex }
							addTabPosition={ this.props.addTabPosition }
							tabs={ this.props.tabs }
						/>
					</div>
				}
				{ !this.props.customBodyElementId &&
					<div style={{ height: `calc(100% - ${ headerHeight })` }}>
						{ this.setTabVisibility() }
					</div>
				}
			</div>
		)
	}
}
