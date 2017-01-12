// @flow

import React, { Component } from 'react'
import { render } from 'react-dom'

import TabHeader from './tab_header'

type ID = number | string
type Tabs = Array<Object>

type Props = {
	onSetActiveTab?: (index: number) => void,
	onAddTabButtonClick?: (e: Object, tabs: Tabs) => void,
	onCloseTabButtonClick?: (e: Object, tabs: Tabs, closedTabIndex: number) => void,
	onDragStop?: (e: Object, data: Object, tabs: Tabs, activeTabIndex: number) => void,
	onTabClick?: (e: Object, index: number) => void,
	addTabPosition: 'none' | 'start' | 'end',
	activeTabIndex: number,
	tabs: Tabs,
	defaultContent: Object,
	showHeader: boolean,
	headerHeight: number | string,
	autoActiveTab: boolean,
	customBodyElementId?: string,

	// Experimental
	onMouseEnter?: () => void,
	onMouseLeave?: () => void,
	onDragOut?: (e: Object, data: Object, tabs: Tabs, outTabIndex: number) => void,
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
			activeTabIndex: 0
		}
	}

	findTabIdByIndex(index: number): ID {
		if (!this.props.tabs[index]) {
			return -1
		}

		return this.props.tabs[index].props.tabId
	}

	findTabIndexById(id: ID): number {
		for (let index = 0; index < this.props.tabs.length; index++) {
			if (id === this.props.tabs[index].props.tabId) {
				return index
			}
		}

		return -1
	}

	getActiveTab() {
		const activeTab = (this.props.activeTabIndex) ? this.props.activeTabIndex : this.state.activeTabIndex

		return activeTab
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

	onAddTabButtonClick(e: Object, tabs: Tabs) {
		if (this.props.onAddTabButtonClick) {
			this.props.onAddTabButtonClick(e, tabs)
		}

		this.onSetActiveTab(tabs.length - 1)
	}

	onCloseTabButtonClick(e: Object, tabs: Tabs, closedTabIndex: number) {
		if (this.props.onCloseTabButtonClick) {
			this.props.onCloseTabButtonClick(e, tabs, closedTabIndex)
		}

		const activeTabIndex = this.getActiveTab()

		if (closedTabIndex <= activeTabIndex) {
			this.onSetActiveTab((activeTabIndex === 0) ? 0 : activeTabIndex - 1)
		}
	}

	onDragOut(e: Object, data: Object, tabs: Tabs, index: number) {
		if (this.props.onDragOut) {
			this.props.onDragOut(e, data, tabs, index)
		}
	}

	onDragStop(e: Object, data: Object, tabs: Tabs, activeTabIndex: number) {
		if (this.props.onDragStop) {
			this.props.onDragStop(e, data, tabs, activeTabIndex)
		}

		this.onSetActiveTab(activeTabIndex)
	}

	onTabClick(e: Object, index: number) {
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

	renderActiveChild(index: number): Object {
		if (index > -1 && this.props.tabs[index]) {
			return this.props.tabs[index].props.children
		} else if (this.props.tabs.length === 0) {
			return this.props.defaultContent
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

	componentDidUpdate() {
		const customBodyElementId = this.props.customBodyElementId

		if (customBodyElementId) {
			render(
				this.renderActiveChild(this.getActiveTab()),
				document.getElementById(customBodyElementId)
			)
		}
	}

	render() {
		const headerHeight = (this.shouldRenderHeader()) ? this.formatHeight(this.props.headerHeight) : 0

		return (
			<div style={{ height: '100%' }}>
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
							activeTabIndex={ this.getActiveTab() }
							addTabPosition={ this.props.addTabPosition }
							tabs={ this.props.tabs }
						/>
					</div>
				}
				{ !this.props.customBodyElementId &&
					<div style={{ height: `calc(100% - ${ headerHeight })` }}>
						{ this.renderActiveChild(this.getActiveTab()) }
					</div>
				}
			</div>
		)
	}
}
