import React from 'react'
import { shallow } from 'enzyme'

import { Pagination } from '../'

describe('<Pagination.Item />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Pagination.Item to="/">
        Item text
      </Pagination.Item>
    )
    expect($.contains('Item text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Pagination.Item className="test">Test</Pagination.Item>)
    expect($.hasClass('c-pagination__item test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Pagination.Item node="article">_</Pagination.Item>)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<Pagination.Item>-</Pagination.Item>)
    expect($.type()).toBe('li')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Pagination.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </Pagination.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
