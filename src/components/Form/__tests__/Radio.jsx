import React from 'react'
import { shallow } from 'enzyme'

import { randomId } from '../../../utils'
import { Form } from '../'

jest.mock('../../../utils')

describe('<Form.Radio />', () => {
  it('renders <Form.RadioInput /> && <Form.RadioLabel /> in the correct order', () => {
    const $ = shallow(<Form.Radio id="test-radio-1" name="test-radio-group">_</Form.Radio>)
    expect($.childAt(0).type()).toBe(Form.RadioInput)
    expect($.childAt(1).type()).toBe(Form.RadioLabel)
  })

  it('renders <Form.RadioInput /> with an id, checked, disabled and name prop', () => {
    const $ = shallow(<Form.Radio id="test-radio-1" checked disabled name="test-radio-group">_</Form.Radio>)
    expect($.find(Form.RadioInput).prop('id')).toBe('test-radio-1')
    expect($.find(Form.RadioInput).prop('name')).toBe('test-radio-group')
    expect($.find(Form.RadioInput).prop('checked')).toBe(true)
    expect($.find(Form.RadioInput).prop('disabled')).toBe(true)

    const $$ = shallow(<Form.Radio id="test-radio-1" name="test-radio-group">_</Form.Radio>)
    expect($$.find(Form.RadioInput).prop('checked')).toBe(undefined)
    expect($$.find(Form.RadioInput).prop('disabled')).toBe(undefined)
  })

  it('renders <Form.RadioLabel /> with an htmlFor prop aliased from "id"', () => {
    const $ = shallow(<Form.Radio id="test-radio-1" name="test-radio-group">_</Form.Radio>)
    expect($.find(Form.RadioLabel).prop('htmlFor')).toBe('test-radio-1')
  })

  it('renders children inside RadioLabel', () => {
    const $ = shallow(
      <Form.Radio id="test-radio-1" name="test-radio-group">
        hello test
      </Form.Radio>
    )
    expect($.find(Form.RadioLabel).contains('hello test')).toBe(true)
  })

  it('takes a onChange prop passing it to <Form.RadioInput />', () => {
    const testFn = jest.fn()
    const $ = shallow(<Form.Radio name="test" id="test-checkbox-1" onChange={testFn} >_</Form.Radio>)
    expect($.find(Form.RadioInput).prop('onChange')).toBe(testFn)
  })

  it('renders with attributes on <Form.RadioWrapper />', () => {
    const $ = shallow(
      <Form.Radio id="test" name="test" style={{ position: 'relative' }} ariaHidden="true">
        _
      </Form.Radio>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders with a random id by default', () => {
    randomId.mockImplementation(() => 'test-id')
    const $ = shallow(<Form.Radio name="test">_</Form.Radio>)
    expect($.find(Form.RadioInput).prop('id')).toBe('test-id')
  })
})
