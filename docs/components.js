import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

export const Link = ({ href, ...props }) =>
  isAbsoluteURL(href || '')
    ? <a href={href} {...props} />
    : <GatsbyLink to={href} {...props} />

export default () => false
