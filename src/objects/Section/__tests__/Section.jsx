import React from 'react'
import { shallow } from 'enzyme'

import { Section } from '../'

describe('<Section />', () => {
  it('takes a single size', () => {
    const $ = shallow(<Section size="md" />)
    expect($.hasClass('o-section-md')).toBe(true)
  })

  it('takes a list of sizes', () => {
    const sizes = ['sm', 'md@sm']
    const $ = shallow(<Section size={sizes} />)
    expect($.hasClass('o-section-sm o-section-md@sm')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Section size="t">
        <div className="child" />
      </Section>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Section size="t" node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Section size="t" />)
    expect($.type()).toBe('section')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<Section size="t" className="test" />)
    expect($.hasClass('test')).toBe(true)
  })
})