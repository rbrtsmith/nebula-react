import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const PaginationItem = ({
  tag,
  children,
  className,
  ...rest }) =>
  E(
    tag || 'li',
    {
      className: classNames('c-pagination__item', className),
      ...rest
    },
    children
  )

PaginationItem.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default PaginationItem