import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import CloseTabButton from '../../src/close_tab_button'
import styles from '../../styles/tab.css'

describe('<CloseTabButton />', () => {
	const wrapper = shallow(<CloseTabButton />)

	it('should be a "div" element', () => {
		expect(wrapper).to.have.tagName('div')
	})

	it('should have inline classname and style classname', () => {
		expect(wrapper).to.have.className(`closeTabButton ${ styles.macOSCloseTabButton }`)
	})

	it('should have onClick event', () => {
		expect(wrapper).to.have.prop('onClick')
	})

	it('should have onMouseDown event', () => {
		expect(wrapper).to.have.prop('onMouseDown')
	})

	it('should have child "div" element with an "×"', () => {
		expect(wrapper.childAt(0)).to.have.text('×')
	})
})
