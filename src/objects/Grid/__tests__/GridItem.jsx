import React from 'react'
import { shallow } from 'enzyme'

import { Grid } from '../'

describe('<Grid.Item />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <Grid.Item>
        <div className="test" />
      </Grid.Item>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('takes a defined className', () => {
    const $ = shallow(<Grid.Item className="test" />)
    expect($.hasClass('o-grid__item test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Grid.Item node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Grid.Item />)
    expect($.type()).toBe('div')
  })

  it('takes a single width fraction', () => {
    const $ = shallow(<Grid.Item width="1/2" />)
    expect($.hasClass('o-grid__item u-1/2')).toBe(true)
  })

  it('takes a list of width fractions', () => {
    const fractions = ['1/2', '1/3@sm', '1/4@lg']
    const $ = shallow(<Grid.Item width={fractions} />)
    expect($.hasClass('o-grid__item u-1/2 u-1/3@sm u-1/4@lg')).toBe(true)
  })

  it('takes a single push fraction', () => {
    const $ = shallow(<Grid.Item push="1/2" />)
    expect($.hasClass('o-grid__item u-push-1/2')).toBe(true)
  })

  it('takes a list of push fractions', () => {
    const fractions = ['1/2', '1/3@sm']
    const $ = shallow(<Grid.Item push={fractions} />)
    expect($.hasClass('o-grid__item u-push-1/2 u-push-1/3@sm')).toBe(true)
  })

  it('takes a single pull fraction', () => {
    const $ = shallow(<Grid.Item pull="1/2" />)
    expect($.hasClass('o-grid__item u-pull-1/2')).toBe(true)
  })

  it('takes a list of pull fractions', () => {
    const fractions = ['1/2']
    const $ = shallow(<Grid.Item pull={fractions} />)
    expect($.hasClass('o-grid__item u-pull-1/2')).toBe(true)
  })
})