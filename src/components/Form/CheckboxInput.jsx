import React from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const CheckboxInput = ({ className, onChange, id, checked, disabled, ...rest }) => (
  <input
    type="checkbox"
    className={classNames('c-form-input__input', className)}
    id={id}
    onChange={onChange}
    checked={checked}
    disabled={disabled}
    {...rest}
  />
)

CheckboxInput.propTypes = {
  className: T.string,
  onChange: T.func,
  checked: T.bool,
  disabled: T.bool,
  id: T.string.isRequired
}

export default CheckboxInput