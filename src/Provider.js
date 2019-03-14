import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'emotion-theming'
import merge from 'lodash.merge'
import { Root, base } from './themes'
import { mergeTheme, mergeComponents } from './util'

export const Provider = ({
  children,
  components,
  theme,
  ...props
}) =>
  <ThemeProvider theme={mergeTheme(theme)(base.theme)}>
    <MDXProvider components={mergeComponents(components)(base.components)}>
      <Root>
        {children}
      </Root>
    </MDXProvider>
  </ThemeProvider>

export default Provider
