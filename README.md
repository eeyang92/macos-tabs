# MacOS Tabs

## Note

This package is a work in progress. More examples and configuration options will be put up as soon as possible!

## Installation

```bash
npm install --save macos-tabs
```

or

```bash
yarn add macos-tabs
```

## Usage

## API

### MacOSTabs

```javascript
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

static defaultProps = {
	tabs: [],
	addTabPosition: 'end',
	showHeader: true,
	headerHeight: 24,
	dragOutDistance: 40,
	autoActiveTab: true
}
```

### TabBody

```javascript
type Props = {
	label?: string | number,
	children?: Object,
	tabId: string | number
}

static defaultProps = {
	label: '',
	children: null
}
```

## Minimal Example

```javascript
// @flow
import React, { Component } from 'react'
import MacOSTabs, { TabBody } from 'macos-tabs'

type Tabs = Array<Object>
type ID = number | string

type Props = Object
type State = {
	tabs: Tabs
}

const defaultStyles = {
	height: '100%'
}

export default class Home extends Component {
	props: Props
	state: State
	id: number

	constructor(props: Props) {
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

	makeTab(id: ID) {
		return (
			<TabBody label={ `Test Tab ${ id }` } tabId={ id } key={ id }>
				<div style={{
					height: '100%',
					border: '1px solid red',
					textAlign: 'center',
					boxSizing: 'border-box',
					paddingTop: '20%'
				}}>
					Hello { id }!
				</div>
			</TabBody>
		)
	}

	onDragStop(e: Object, data: Object, tabs: Tabs, activeTabIndex: number) {
		this.setState({
			tabs
		})
	}

	onAddTabButtonClick(e: Object, tabs: Tabs) {
		// Note: Feel free to mutate the returned tabs, it is already deep cloned
		tabs.push(this.makeTab(this.id++))

		this.setState({
			tabs
		})
	}

	onCloseTabButtonClick(e: Object, tabs: Tabs, closedTabIndex: number) {
		// Note: Feel free to mutate the returned tabs, it is already deep cloned
		tabs.splice(closedTabIndex, 1)

		this.setState({
			tabs
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

