import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Box from './Box'

export const mergeComponents = overrides => base => {
  const components = { ...base }
  for (const key in overrides) {
    const Component = base[key] || key
    components[key] = props =>
      <Component
        {...props}
        css={overrides[key]}
      />
  }
  return components
}

export const Block = ({
  styles,
  ...props
}) =>
  <MDXProvider components={mergeComponents(styles)}>
    <Box
      data-block
      {...props}
    />
  </MDXProvider>

export default Block
