import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlagWrapper = ({
 tag,
 breakpoint,
 gutter,
 reverse,
 align,
 children,
 className,
  ...rest
}) =>
  E(
    tag || 'div',
    {
      className: classNames(
        breakpoint ? `o-flag@${breakpoint}` : 'o-flag',
        gutter ? `o-flag--gutter-${gutter}` : null,
        align ? `o-flag--${align}` : null,
        { 'o-flag--reverse': reverse },
        className
      ),
      ...rest
    },
    children
  )

FlagWrapper.propTypes = {
  tag: T.string,
  breakpoint: T.oneOf(['foo', 'sm', 'md', 'lg']),
  gutter: T.oneOf(['md']),
  reverse: T.bool,
  align: T.oneOf(['top', 'bottom']),
  children: T.node,
  className: T.string
}

export default FlagWrapper
