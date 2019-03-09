import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'emotion-theming'
import merge from 'lodash.merge'
import defaultTheme from './theme'
import defaultComponents from './components'

const getTheme = propsTheme => parent => merge(defaultTheme, parent, propsTheme)
const getComponents = propsComponents => parent => merge(defaultComponents, parent, propsComponents)

export const Provider = ({
  components,
  theme,
  ...props
}) =>
  <ThemeProvider theme={getTheme(theme)}>
    <MDXProvider
      {...props}
      components={getComponents(components)}
    />
  </ThemeProvider>
