import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import Draggable from 'react-draggable'
import CloseTabButton from '../../src/close_tab_button'

import Tab from '../../src/tab'
import styles from '../../styles/tab.css'

describe('<Tab />', () => {
	const props = {
		id: 1
	}

	const wrapper = mount(<Tab { ...props } />)

	before(() => {
		sinon.stub(console, 'error', (warning) => { throw new Error(warning) })
	})

	after(() => {
		console.error.restore() }
	)

	it('should be a Tab Component', () => {
		expect(wrapper).to.have.type(Tab)
	})

	it('should contain the props id === 1', () => {
		expect(wrapper).to.have.prop('id', 1)
	})

	it('should contain a Draggable Component', () => {
		expect(wrapper.find(Draggable)).to.have.length(1)
	})

	it('should contain a CloseTabButton Component', () => {
		expect(wrapper.find(CloseTabButton)).to.have.length(1)
	})

	describe('<Draggable />', () => {
		const draggable = wrapper.find(Draggable).first()

		it('should have props', () => {
			expect(draggable).to.have.prop('axis', 'x')
		})

		it('should have onMouseDown event', () => {
			expect(draggable).to.have.prop('onMouseDown')
		})
	})
})
