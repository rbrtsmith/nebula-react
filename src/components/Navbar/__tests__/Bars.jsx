import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Navbar } from '../'

describe('<Navbar.Toggle.Bars />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Toggle.Bars className="test">_</Navbar.Toggle.Bars>)
    expect($.hasClass(`${NAMESPACE}c-navbar__toggle-bars`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Navbar.Toggle.Bars>
        Toggle bars text
      </Navbar.Toggle.Bars>
    )
    expect($.contains('Toggle bars text')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Toggle.Bars tag="article">_</Navbar.Toggle.Bars>)
    expect($.type()).toBe('article')
  })

  it('renders a span by default', () => {
    const $ = shallow(<Navbar.Toggle.Bars>-</Navbar.Toggle.Bars>)
    expect($.type()).toBe('span')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Toggle.Bars style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Toggle.Bars>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
