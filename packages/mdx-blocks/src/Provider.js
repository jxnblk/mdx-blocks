import React from 'react'
import { MDXStyle } from 'mdx-style'

export const Provider = ({
  components,
  ...props
}) =>
  <MDXStyle
    {...props}
    _components={components}
  />

export default Provider
