import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Box from './Box'
import { mergeComponents } from './util'

export const Block = ({
  styles,
  components,
  ...props
}) =>
  <MDXProvider components={mergeComponents(styles, components)}>
    <Box
      data-block
      {...props}
    />
  </MDXProvider>

export default Block
