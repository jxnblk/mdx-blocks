import React from 'react'
import { MDXProvider } from '@mdx-js/tag'

export const Wrapper = ({
  children,
  render,
  components,
}) =>
  <MDXProvider components={components}>
    {render(React.Children.toArray(children))}
  </MDXProvider>

export default Wrapper
