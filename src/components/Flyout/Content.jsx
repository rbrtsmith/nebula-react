import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, appendUnit } from '../../utils/'
import { DIRECTIONS } from './constants'

// eslint-disable-next-line react/prefer-stateless-function
const FlyoutContent = ({
  tag,
  className,
  children,
  ...rest
},
{
  isFlyoutOpen,
  flyoutDirection,
  flyoutWidth
}) =>
  E(
    tag || 'div',
    {
      className: classNames('c-flyout__content', flyoutDirection ? `c-flyout__content--${flyoutDirection}` : '', className),
      style: { width: flyoutWidth && appendUnit(flyoutWidth, 'px') },
      ...rest
    },
    isFlyoutOpen && children
  )

FlyoutContent.contextTypes = {
  isFlyoutOpen: T.bool,
  flyoutDirection: T.oneOf(DIRECTIONS),
  flyoutWidth: T.oneOfType([T.string, T.number])
}

FlyoutContent.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default FlyoutContent
