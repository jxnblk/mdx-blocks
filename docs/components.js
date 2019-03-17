import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

export const Link = ({ href, ...props }) =>
  isAbsoluteURL(href || '')
    // eslint-disable-next-line
    ? <a href={href} {...props} />
    : <GatsbyLink to={href} {...props} activeClassName='active' />

export default () => false
