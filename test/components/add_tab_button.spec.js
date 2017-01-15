import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import AddTabButton from '../../src/add_tab_button'
import style from '../../styles/add_tab_button.css'

describe('<AddTabButton />', () => {
	const wrapper = shallow(<AddTabButton />)

	it('should be a "li" element', () => {
		expect(wrapper).to.have.tagName('li')
	})

	it('should have a style classname', () => {
		expect(wrapper).to.have.className(style.macOSAddTabButton)
	})

	it('should have onClick event', () => {
		expect(wrapper).to.have.prop('onClick')
	})

	it('should have an "+"', () => {
		expect(wrapper).to.have.text('+')
	})
})
