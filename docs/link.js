import React from 'react'
import { Link } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

export default ({ href, ...props }) =>
  isAbsoluteURL(href)
    ? <a href={href} {...props} />
    : <Link to={href} {...props} />
