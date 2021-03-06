import React, { createElement as E, Component } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

class PaginationLink extends Component {
  handleClick = (e) => {
    if (this.props.disabled) {
      return e.preventDefault()
    }

    return this.props.onClick && this.props.onClick(e, this)
  }

  render() {
    const {
      to,
      component,
      tag,
      className,
      isActive,
      activeClassName = 'is-active',
      onClick,
      children,
      previous,
      disabled,
      next,
      ...rest
    } = this.props

    const ComponentOverride = component

    if (ComponentOverride) {
      return (
        <ComponentOverride
          to={to}
          className={classNames(
            `${NAMESPACE}c-pagination__link`, className,
            previous ? `${NAMESPACE}c-pagination__link--previous` : '',
            next ? `${NAMESPACE}c-pagination__link--next` : '',
          )}
          onClick={this.handleClick}
          {...{ activeClassName, disabled }}
          {...rest}
        >
          {children}
        </ComponentOverride>
      )
    }

    return E(
      tag || 'a',
      {
        href: to,
        className: classNames(
          `${NAMESPACE}c-pagination__link`, className,
          previous ? `${NAMESPACE}c-pagination__link--previous` : '',
          next ? `${NAMESPACE}c-pagination__link--next` : '',
          isActive ? activeClassName : '',
        ),
        onClick: this.handleClick,
        disabled,
        ...rest
      },
      children
    )
  }
}

PaginationLink.propTypes = {
  component: T.oneOfType([
    T.func,
    T.node
  ]),
  isActive: T.bool,
  activeClassName: T.string,
  to: T.string.isRequired,
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  onClick: T.func,
  children: T.node,
  disabled: T.bool,
  previous: T.bool,
  next: T.bool
}

export default PaginationLink
