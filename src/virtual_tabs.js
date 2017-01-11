// @flow
import $ from 'jquery'

type ID = number | string
type Tabs = Array<{
	id: number,
	offsetX: number
}>
type Refs = { [key: string | number]: HTMLElement }
type Direction = null | 'left' | 'right'

export default class VirtualTabs {
	switchNumber: number
	direction: Direction
	sourceId: ID
	currentX: number
	leftTrigger: number
	rightTrigger: number
	tabs: Tabs
	refs: Refs

	constructor(tabs: Array<Object>, refs: Refs, sourceId: ID) {
		this.tabs = tabs.map((tab) => {
			return {
				id: tab.props.tabId,
				offsetX: 0
			}
		})

		this.refs = refs
		this.sourceId = sourceId
		this.direction = null
		this.currentX = 0
		this.switchNumber = 0

		this.calculateSwitchNumbers()
	}

	getTabIds() {
		return this.tabs.map((tab) => tab.id)
	}

	calculateSwitchNumbers() {
		const width = this.refs[this.sourceId].getBoundingClientRect().width

		this.leftTrigger = width * (-0.5 + this.switchNumber)
		this.rightTrigger = width * (0.5 + this.switchNumber)
	}

	getIndex(id: ID) {
		return this.tabs.findIndex((element) => element.id === id)
	}

	getIdToLeft(sourceId: ID) {
		const sourceIndex = this.getIndex(sourceId)
		const targetIndex = sourceIndex - 1

		if (targetIndex > -1) {
			const targetId = this.tabs[targetIndex].id

			return targetId
		}

		return -1
	}

	getIdToRight(sourceId: ID) {
		const sourceIndex = this.getIndex(sourceId)
		const targetIndex = sourceIndex + 1

		if (targetIndex < this.tabs.length) {
			const targetId = this.tabs[targetIndex].id

			return targetId
		}

		return -1
	}

	swapTabs(sourceId: ID, targetId: ID, directionNum: number) {
		const sourceIndex = this.getIndex(this.sourceId)
		const targetIndex = this.getIndex(targetId)
		const targetRef = this.refs[targetId]

		if (targetIndex > -1 && targetIndex < this.tabs.length) {
			this.tabs[targetIndex].offsetX -= targetRef.getBoundingClientRect().width * directionNum

			// Note: jQuery animate doesn't work here

			$(targetRef).css({
				transition: 'transform 0.1s linear',
				transform: `translate(${ this.tabs[targetIndex].offsetX }px, 0px)`
			})

			this.switchNumber += directionNum

			this.calculateSwitchNumbers()

			const temp = this.tabs[sourceIndex]

			this.tabs[sourceIndex] = this.tabs[targetIndex]
			this.tabs[targetIndex] = temp
		}
	}

	move(x: number) {
		if (x < this.currentX) {
			this.direction = 'left'
			this.currentX = x
		} else if (x > this.currentX) {
			this.direction = 'right'
			this.currentX = x
		}

		if (this.direction === 'left') {
			if (x < this.leftTrigger) {
				const targetId = this.getIdToLeft(this.sourceId)

				this.swapTabs(this.sourceId, targetId, -1)
			}
		} else if (this.direction === 'right') {
			if (x > this.rightTrigger) {
				const targetId = this.getIdToRight(this.sourceId)

				this.swapTabs(this.sourceId, targetId, 1)
			}
		}
	}
}
