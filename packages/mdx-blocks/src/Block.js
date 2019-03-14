import React from 'react'
import { MDXStyle } from 'mdx-style'
import Box from './Box'

export const Block = ({
  styles,
  components,
  ...props
}) =>
  <MDXStyle
    _components={styles}
    components={components}>
    <Box
      data-block
      {...props}
    />
  </MDXStyle>

export default Block
