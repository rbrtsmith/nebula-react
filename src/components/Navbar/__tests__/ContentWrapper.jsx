import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Navbar } from '../'

describe('<Navbar.ContentWrapper />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.ContentWrapper className="test">_</Navbar.ContentWrapper>)
    expect($.hasClass(`${NAMESPACE}c-navbar__content-wrapper`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Navbar.ContentWrapper>
        ContentWrapper text
      </Navbar.ContentWrapper>
    )
    expect($.contains('ContentWrapper text')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.ContentWrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.ContentWrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.ContentWrapper tag="article">_</Navbar.ContentWrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Navbar.ContentWrapper>-</Navbar.ContentWrapper>)
    expect($.type()).toBe('div')
  })
})
