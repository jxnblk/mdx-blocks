import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'emotion-theming'
import merge from 'lodash.merge'
import base from './themes/base'

const mergeTheme = theme => merge(base.theme, theme)
const mergeComponents = components => merge(base.components, components)

export const Provider = ({
  children,
  components,
  theme,
  ...props
}) =>
  <ThemeProvider theme={mergeTheme(theme)}>
    <MDXProvider components={mergeComponents(components)}>
      {children}
    </MDXProvider>
  </ThemeProvider>

export default Provider
