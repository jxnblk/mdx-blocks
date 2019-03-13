import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'emotion-theming'
import merge from 'lodash.merge'
import base from './themes/base'
import { mergeTheme, mergeComponents } from './util'

export const Provider = ({
  children,
  components,
  theme,
  ...props
}) =>
  <ThemeProvider theme={mergeTheme(theme)(base.theme)}>
    <MDXProvider components={mergeComponents(components)(base.components)}>
      {children}
    </MDXProvider>
  </ThemeProvider>

export default Provider
