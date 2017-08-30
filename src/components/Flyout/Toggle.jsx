import React, { Component } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

// eslint-disable-next-line react/prefer-stateless-function
class FlyoutToggle extends Component {
  render() {
    const { className, handleToggle, children, ...rest } = this.props
    return (
      <button
        className={classNames('c-flyout__toggle', className)}
        onClick={this.context.handleToggle}
        {...rest}
      >
        { children }
      </button>
    )
  }
}

FlyoutToggle.propTypes = {
  className: T.string,
  handleToggle: T.func,
  children: T.node.isRequired
}

FlyoutToggle.contextTypes = {
  handleToggle: T.func
}

export default FlyoutToggle
