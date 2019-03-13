import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'emotion-theming'
import merge from 'lodash.merge'
import defaultComponents from './components'
import defaultTheme from './theme'

const mergeTheme = theme => merge(defaultTheme, theme)
const mergeComponents = components => merge(defaultComponents, components)

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
