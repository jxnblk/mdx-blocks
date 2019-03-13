import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'emotion-theming'
import merge from 'lodash.merge'
import base from './themes/base'

const createButtonLink = (Link, Button) => ({
  title,
  ...props
}) =>
  (title === 'button')
    ? <Button {...props} />
    : <Link title={title} {...props} />

const mergeTheme = theme => merge(base.theme, theme)
const mergeComponents = components => {
  const merged = merge(base.components, components)
  const Link = merged.a || 'a'
  merged.a = createButtonLink(Link, merged.button || 'button')
  return merged
}

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
