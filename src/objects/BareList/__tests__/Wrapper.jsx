import React from 'react'
import { shallow } from 'enzyme'

import { BareList } from '../'

describe('<BareList.Wrapper />', () => {
  it('takes a single spacing value', () => {
    const $ = shallow(<BareList.Wrapper spacing="md" />)
    expect($.hasClass('o-bare-list o-bare-list--spaced-md')).toBe(true)
  })

  it('takes a list of sizes', () => {
    const spacing = ['sm', 'md@sm']
    const $ = shallow(<BareList.Wrapper spacing={spacing} />)
    expect($.hasClass('o-bare-list o-bare-list--spaced-sm o-bare-list--spaced-md@sm')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <BareList.Wrapper>
        <div className="child" />
      </BareList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<BareList.Wrapper node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<BareList.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders with the default className', () => {
    const $ = shallow(<BareList.Wrapper />)
    expect($.hasClass('o-bare-list')).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<BareList.Wrapper className="test" />)
    expect($.hasClass('o-bare-list test')).toBe(true)
  })
})