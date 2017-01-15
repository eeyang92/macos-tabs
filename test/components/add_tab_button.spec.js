import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import AddTabButton from '../../src/add_tab_button'
import style from '../../styles/add_tab_button.css'

describe('<AddTabButton />', () => {
	const wrapper = mount(<AddTabButton />)

	it('should be a "li" element', () => {
		expect(wrapper).to.have.tagName('li')
	})

	it('should have a style classname', () => {
		expect(wrapper.find('li')).to.have.className(style.macOSAddTabButton)
	})

	it('should have onClick event', () => {
		expect(wrapper.find('li')).to.have.prop('onClick')
	})

	it('should have an "+"', () => {
		expect(wrapper.find('li')).to.have.text('+')
	})
})
