import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'emotion-theming'
import baseTheme from './theme'

const getTheme = parent => ({
  ...baseTheme,
  ...parent,
})

export const Wrapper = ({
  children,
  render,
}) => {
  const elements = React.Children.toArray(children)
  return render(elements)
}

export const Provider = ({
  render,
  components = {},
  ...props
}) =>
  <ThemeProvider theme={getTheme}>
    <MDXProvider
      {...props}
      components={{
        ...components,
        wrapper: props => (
          <Wrapper
            {...props}
            render={render}
          />
        )
      }}
    />
  </ThemeProvider>

export default Provider
