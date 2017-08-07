import React from 'react'
import { shallow } from 'enzyme'

import { BareList } from '../'

describe('<BareList.Item />', () => {
  it('renders children', () => {
    const $ = shallow(
      <BareList.Item>
        <div className="child" />
      </BareList.Item>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<BareList.Item node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<BareList.Item />)
    expect($.type()).toBe('li')
  })

  it('renders with the default className', () => {
    const $ = shallow(<BareList.Item />)
    expect($.hasClass('o-bare-list__item')).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<BareList.Item className="test" />)
    expect($.hasClass('o-bare-list__item test')).toBe(true)
  })
})