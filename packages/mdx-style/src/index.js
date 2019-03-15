import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { ThemeProvider } from 'emotion-theming'
import styled from '@emotion/styled'
import {
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  compose,
} from 'styled-system'
import merge from 'lodash.merge'
import omit from 'lodash.omit'
import pick from 'lodash.pick'

import * as themes from './themes'

export { themes }

const systemProps = [
  'theme',
  'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my',
  'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'color',
  'bg',
  'backgroundColor',
]

const css = props => omit(props, systemProps)

const sx = compose(
  css,
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight
)

const filterEmpty = n => Object.keys(n).length > 0

export const system = style => props => {
  // handle usage in styled components & in css prop
  const theme = props.theme || props
  const styleProps = pick(props, systemProps)
  const styles = [ ...sx({ theme, ...style, ...styleProps }) ]
  for (const key in style) {
    const val = style[key]
    if (!val || typeof val !== 'object') continue
    styles.push({
      [key]: system(val)(props)
    })
  }
  return styles.filter(Boolean).filter(filterEmpty)
}

// base theme
export const theme = {
  googleFont: null,
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    highlight: '#e40',
    muted: '#fafafe',
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512,
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96, 128,
  ],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  maxWidths: {
    container: 1024,
  }
}

// base components
const a = styled.a(system({
  color: 'primary',
  textDecoration: 'none',
  '&:hover': {
    color: 'secondary',
    textDecoration: 'underline',
  }
}))

// <a title='button'> is converted to this component
const button = styled.a(system({
  display: 'inline-block',
  alignSelf: 'center',
  textDecoration: 'none',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  borderRadius: 6,
  '&:hover': {
    bg: 'secondary',
  }
}))

const img = styled.img({
  maxWidth: '100%',
  height: 'auto',
})

const heading = (tag, styles) =>
  styled(tag)(system({
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    ...styles
  }))

const h1 = heading('h1', { fontSize: 6 })
const h2 = heading('h2', { fontSize: 5 })
const h3 = heading('h3', { fontSize: 4 })
const h4 = heading('h4', { fontSize: 3 })
const h5 = heading('h5', { fontSize: 2 })
const h6 = heading('h6', { fontSize: 1 })

const code = styled.code(system({
  fontFamily: 'monospace',
}))

const inlineCode = styled.code(system({
  fontFamily: 'monospace',
}))

const pre = styled.pre(system({
  fontFamily: 'monospace',
  p: 3,
}))

export const components = {
  a,
  button,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  code,
  pre,
  inlineCode,
}

export const defaults = {
  components,
  theme
}

const createButtonLink = (Link, Button) => ({
  title,
  ...props
}) =>
  (title === 'button')
    ? <Button {...props} />
    : <Link title={title} {...props} />

export const mergeComponents = (...overrides) => (base = {}) => {
  const components = {
    ...defaults.components,
    ...base
  }
  overrides.forEach(obj => {
    for (const key in obj) {
      // const Component = base[key] || key
      const override = obj[key]
      if (!override) continue
      if (typeof override === 'function') {
        components[key] = override
      } else if (typeof override === 'object') {
        components[key] = styled(components[key] || key)(system(override))
      }
    }
  })
  components.a = createButtonLink(components.a || 'a', components.button || 'button')
  return components
}

export const mergeThemes = (...overrides) => base =>
  merge(defaults.theme, base, ...overrides)


export const Root = styled.div(system({
  fontFamily: 'body',
  lineHeight: 'body',
  color: 'text',
  bg: 'background',
}))

export const MDXStyle = ({
  components = {},
  _components = {},
  theme = {},
  ...props
}) => {
  return (
    <ThemeProvider theme={mergeThemes(theme)}>
      <MDXProvider components={mergeComponents(_components, components)}>
        <Root {...props} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MDXStyle

