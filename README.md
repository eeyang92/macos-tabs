# MacOS Tabs

[![npm version](https://badge.fury.io/js/macos-tabs.svg)](https://www.npmjs.com/package/macos-tabs)

## Note

This package is a work in progress. More examples and configuration options will be put up as soon as possible!

Also note, since 1.3.0 the order of arguments in onDragStop has been changed to bring it in line with the other props

## Installation

```sh
npm install --save macos-tabs
```

or

```sh
yarn add macos-tabs
```

## Usage

## API

### MacOSTabs

```javascript
type Props = {
	// onClick event when the user clicks on the AddTabButton on a tab header
	onAddTabButtonClick: (e: Event) => void,

	// onClick event when the user clicks on the CloseTabButton on a tab header
	onCloseTabButtonClick: (e: Event, index: number) => void,

	// Event when the user stops dragging a header
	// The updated tabs contain the new ordering, you can directly update your state with
	// these returned tabs
	// The updated index of the active tab is also provided
	onDragStop: (e: Event, index: number, tabs: Tabs) => void,

	// Event when the user clicks on a tab header
	// The index of the clicked header is passed back
	onTabClick: (e: Event, index: number) => void,

	// Event when the user's mouse enters a tab header
	onTabMouseEnter: (e: Event, index: number) => void,

	// Even when the user's mouse leaves a tab header
	onTabMouseLeave: (e: Event, index: number) => void,

	// Event when the activeTabIndex is updated internally
	// This allows you to keep track of the activeTabIndex even
	// if you are letting MacOSTabs handle the state
	onSetActiveTab: (index: number) => void,

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
	// anything besides the default of 24px, this is a WIP)
	headerHeight: number | string,

	// Declare a custom element that the body should be rendered into
	// instead of directly below the tab headers
	// i.e. <div id="tabBody" />
	customBodyElementId: string,

	// Set tab scroll behavior
	scrollX: 'normal' | 'reversed' | 'disabled',

	// Set tab scroll behavior
	scrollY: 'normal' | 'reversed' | 'disabled',

	// Apply custom styles to specified component(s)
	styles: {
		addTabButton?: Object,
		closeTabButton?: Object,
		tab?: Object,
		tabActive?: Object,
		outerTabContainer?: Object,
		innerTabContainer?: Object
	},

	// Apply custom classnames to specified component(s)
	classNames: {
		addTabButton?: string,
		closeTabButton?: string,
		tab?: string,
		tabActive?: string,
		outerTabContainer?: string,
		innerTabContainer?: string
	},

	// Override icons on buttons
	icons: {
		addTabButton?: Object | string,
		closeTabButton?: Object | string
	},

	// Experimental/Not Completed
	onDragOut: (e: Event, outTabIndex: number) => void,
	dragOutDistance: number
}

static defaultProps = {
	tabs: [],
	activeTabIndex: 0,
	scrollX: 'normal',
	scrollY: 'disabled',
	addTabPosition: 'end',
	showHeader: true,
	headerHeight: 24,
	dragOutDistance: 40,
	autoActiveTab: true,
	styles: {},
	classNames: {},
	icons: {}
}
```

### TabBody

```javascript
type Props = {
	// Label that will be displayed on the tab header
	label: string | number,

	// Children components to render
	children?: HTMLElement | Component<*, *, *>,

	// Unique tabId
	tabId: string | number,

	// Optional styles/classnames

	// Set additional TabBody styles
	// Note: In most cases, setting styles on the child component is sufficient
	style?: Object,

	// Set TabBody classname
	className?: string
}

static defaultProps = {
	label: ''
}
```

## Minimal Example

```javascript
import React, { Component } from 'react'
import MacOSTabs, { TabBody } from 'macos-tabs'

const defaultStyles = {
	height: '100%'
}

export default class Home extends Component {
	constructor(props) {
		super(props)

		this.id = 0

		this.state = {
			tabs: [
				this.makeTab(this.id++),
				this.makeTab(this.id++),
				this.makeTab(this.id++)
			]
		}
	}

	makeTab(id) {
		return (
			<TabBody label={ `Test Tab ${ id }` } tabId={ id } key={ id }>
				<div
					style={{
						height: '100%',
						border: '1px solid red',
						textAlign: 'center',
						boxSizing: 'border-box',
						paddingTop: '20%'
					}}
				>
					Hello { id }!
				</div>
			</TabBody>
		)
	}

	onDragStop(e, activeTabIndex, tabs) {
		this.setState({
			tabs
		})
	}

	onAddTabButtonClick(e) {
		const newTabs = this.state.tabs.slice(0)

		newTabs.push(this.makeTab(this.id++))

		this.setState({
			tabs: newTabs
		})
	}

	onCloseTabButtonClick(e, closedTabIndex) {
		const newTabs = this.state.tabs.slice(0)

		newTabs.splice(closedTabIndex, 1)

		this.setState({
			tabs: newTabs
		})
	}

	render() {
		return (
			<div style={ defaultStyles }>
				<MacOSTabs
					tabs={ this.state.tabs }
					onDragStop={ this.onDragStop.bind(this) }
					onAddTabButtonClick={ this.onAddTabButtonClick.bind(this) }
					onCloseTabButtonClick={ this.onCloseTabButtonClick.bind(this) }
				/>
			</div>
		)
	}
}
```

## Controlled Active Tab & CustomBodyElementID Example

```javascript
import React, { Component } from 'react'
import MacOSTabs, { TabBody } from 'macos-tabs'

const defaultStyles = {
	height: '100%'
}

export default class Home extends Component {
	constructor(props) {
		super(props)

		this.id = 0

		this.state = {
			tabs: [
				this.makeTab(this.id++),
				this.makeTab(this.id++),
				this.makeTab(this.id++)
			],
			activeTabIndex: 0
		}
	}

	makeTab(id) {
		return (
			<TabBody label={ `Test Tab ${ id }` } tabId={ id } key={ id }>
				<div
					style={{
						height: '100%',
						border: '1px solid red',
						textAlign: 'center',
						boxSizing: 'border-box',
						paddingTop: '20%'
					}}
				>
					<form>
						<label>
							Name { id }:
							<input type="text" name="name" />
						</label>
						<input type="submit" value="Submit" />
					</form>
				</div>
			</TabBody>
		)
	}

	onDragStop(e, activeTabIndex, tabs) {
		this.setState({
			tabs,
			activeTabIndex
		})
	}

	onAddTabButtonClick(e) {
		const newTabs = this.state.tabs.slice(0)

		newTabs.push(this.makeTab(this.id++))

		this.setState({
			tabs: newTabs,
			activeTabIndex: newTabs.length - 1
		})
	}

	onCloseTabButtonClick(e, closedTabIndex) {
		const newTabs = this.state.tabs.slice(0)

		newTabs.splice(closedTabIndex, 1)

		if (closedTabIndex <= this.state.activeTabIndex) {
			this.setState({
				tabs: newTabs,
				activeTabIndex: (this.state.activeTabIndex === 0) ? 0 : this.state.activeTabIndex - 1
			})
		} else {
			this.setState({
				tabs: newTabs
			})
		}
	}

	onSetActiveTab(index) {
		this.setState({
			activeTabIndex: index
		})
	}

	render() {
		return (
			<div style={ defaultStyles }>
				<MacOSTabs
					tabs={ this.state.tabs }
					onDragStop={ this.onDragStop.bind(this) }
					onAddTabButtonClick={ this.onAddTabButtonClick.bind(this) }
					onCloseTabButtonClick={ this.onCloseTabButtonClick.bind(this) }
					onSetActiveTab={ this.onSetActiveTab.bind(this) }
					activeTabIndex={ this.state.activeTabIndex }
					defaultContent={ <div>Add a tab to get started!</div> }
					customBodyElementId='custom1'
				/>
				<div id='custom1' style={{ height: 'calc(100% - 24px)' }} />
			</div>
		)
	}
}
```