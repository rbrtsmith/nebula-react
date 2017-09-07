import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutContent = ({ node, className, children, direction, ...rest }, { isOpen }) =>
  E(
    node || 'div',
    {
      className: classNames('c-flyout__content', direction ? `c-flyout__content--${direction}` : '', className),
      ...rest
    },
    isOpen && children
  )

FlyoutContent.contextTypes = {
  isOpen: T.bool
}

FlyoutContent.propTypes = {
  node: T.string,
  className: T.string,
  direction: T.oneOf(['nw', 'ne', 'sw', 'se']),
  children: T.node.isRequired
}

export default FlyoutContent
