import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { MDXProvider, useMDXComponents } from '@mdx-js/tag'
import {
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  width,
  maxWidth,
  compose,
} from 'styled-system'
import merge from 'lodash.merge'
import omit from 'lodash.omit'
import pick from 'lodash.pick'

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

// recursively merges styled-system props and style objects
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
const div = styled.div(system())

const a = styled.a(system({
  color: 'primary',
  textDecoration: 'none',
  '&:hover': {
    color: 'secondary',
    textDecoration: 'underline',
  }
}))

// <a title='button'> or [](/ 'button') is converted to this component
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
  overflowX: 'auto',
}))

export const components = {
  div,
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

const defaults = {
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
      if (typeof override === 'function'
        || (override.$$typeof && override.render)) {
        if (components[key].withComponent) {
          components[key] = components[key].withComponent(override)
        } else {
          components[key] = styled(override)(system({}))
        }
      } else if (typeof override === 'object') {
        components[key] = styled(components[key] || key)(system(override))
      }
    }
  })
  components.a = createButtonLink(components.a || 'a', components.button || components.a || 'a')
  return components
}

export const mergeThemes = (...overrides) => base =>
  merge({}, defaults.theme, base, ...overrides)


export const Root = styled.div(system({
  fontFamily: 'body',
  lineHeight: 'body',
  color: 'text',
  bg: 'background',
}))

export const MDXStyle = ({
  components = {},
  baseComponents = {},
  theme = {},
  ...props
}) => {
  return (
    <ThemeProvider theme={mergeThemes(theme)}>
      <MDXProvider components={mergeComponents(baseComponents, components)}>
        {props.children}
      </MDXProvider>
    </ThemeProvider>
  )
}

export const BlocksProvider = ({
  baseComponents,
  components,
  theme,
  ...props
}) =>
  <MDXStyle
    theme={theme}
    baseComponents={baseComponents}
    components={components}>
    <Root {...props} />
  </MDXStyle>

export const Box = styled.div({
  boxSizing: 'border-box',
  minWidth: 0,
},
  space,
  color,
  width,
  maxWidth,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  props => props.css
)

export const Block = ({
  baseComponents, // what should this be named?
  components,
  ...props
}) =>
  <MDXStyle
    baseComponents={baseComponents}
    components={components}>
    <Box
      data-block
      {...props}
    />
  </MDXStyle>

// util
const PROP = 'mdxType'

export const getType = el => el.props[PROP]
export const isHeading = tag => /^h[1-6]/.test(tag)
export const isImage = el => getType(el) === 'img' || el.type === 'img'
export const getImages = children =>
  React.Children.toArray(children).filter(isImage)
export const getNonImages = children =>
  React.Children.toArray(children).filter(el => !isImage(el))
export const getImageSource = children => {
  const [ img ] = getImages(children)
  if (!img) return
  return img.props.src
}

export const chunkElements = test => children => {
  const elements = React.Children.toArray(children)
  const indices = [0]
  const chunks = []
  elements.forEach((el, i) => {
    const type = el.props[PROP]
    if (test(type)) indices.push(i)
  })
  indices.forEach((a, i) => {
    const b = indices[i + 1]
    const children = elements.slice(a, b)
    if (!children.length) return
    chunks.push(children)
  })
  return chunks
}

// layout components
export const Bar = ({ children, ...props }) =>
  <Block
    {...props}
    data-bar
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    baseComponents={{
      h1: {
        m: 0,
        fontSize: 'inherit',
      },
      ul: {
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        m: 0,
        p: 0,
      },
      li: {
        display: 'flex',
      },
      a: {
        p: 3,
        m: 0,
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
          color: 'inherit',
        }
      },
      button: {
        mx: 3,
      }
    }}>
    {children}
  </Block>

const getBannerBackground = ({
  darken = 0.75,
  children
}) => {
  const src = getImageSource(children)
  return {
    backgroundImage: [
      `linear-gradient(rgba(0, 0, 0, ${darken / 4}), rgba(0, 0, 0, ${darken}))`,
      `url(${src})`,
    ].join(', ')
  }
}

export const Banner = (props) =>
  <Block
    pt={5}
    pb={5}
    {...props}
    data-banner
    css={{
      ...getBannerBackground(props),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <Box
      maxWidth='container'
      mx='auto'
      pl={4}
      pr={4}>
      {getNonImages(props.children)}
    </Box>
  </Block>

export const Cards = ({
  widths = [ 1, 1/2 ],
  children,
  tag = 'img',
  ...props
}) =>
  <Block {...props} data-cards>
    <Box
      maxWidth='container'
      mx='auto'
      css={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {chunkElements(el => el === tag)(children)
        .map((chunk, i) => (
        <Box
          key={i}
          width={widths}
          p={4}>
          {chunk}
        </Box>
      ))}
    </Box>
  </Block>

export const Center = (props) =>
  <Block
    p={4}
    {...props}
    data-center
    css={{
      textAlign: 'center',
    }}
  />

export const Columns = ({
  children,
  ...props
}) =>
  <Block
    {...props}
    data-columns
    baseComponents={{
      ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }
    }}>
    <Box
      maxWidth='container'
      mx='auto'
      css={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {React.Children.toArray(children)
        .map((child, i) => (
        <Box
          key={i}
          width={[ 1, 1 / children.length ]}
          p={4}>
          {child}
        </Box>
      ))}
    </Box>
  </Block>

export const Content = ({
  children,
  ...props
}) =>
  <Block
    data-content
    {...props}>
    <Box
      maxWidth='container'
      mx='auto'
      p={4}>
      {children}
    </Box>
  </Block>

export const Split = ({
  children,
  // flip,
  // widths, ratio,
  ...props
}) =>
  <Block
    {...props}
    data-split>
    <Box
      maxWidth='container'
      mx='auto'
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
      <Box
        p={4}
        width={[ 1, 1/2, 2/5 ]}>
        {getNonImages(children)}
      </Box>
      <Box
        p={4}
        width={[ 1, 1/2, 3/5 ]}>
        {getImages(children)}
      </Box>
    </Box>
  </Block>

export const Tiles = ({
  widths = [ 1, 1/2 ],
  children,
  ...props
}) =>
  <Block {...props} data-tiles>
    <Box
      mx='auto'
      maxWidth='container'
      css={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {chunkElements(isHeading)(children)
        .map((chunk, i) => (
        <Box
          key={i}
          p={4}
          width={widths}>
          {chunk}
        </Box>
      ))}
    </Box>
  </Block>

// functional layouts
const toFunction = Component => defaults => ({ children, ...props }) =>
  <Component
    {...merge({}, defaults, props)}
    children={children}
  />

Bar.props = toFunction(Bar)
Banner.props = toFunction(Banner)
Cards.props = toFunction(Cards)
Center.props = toFunction(Center)
Columns.props = toFunction(Columns)
Content.props = toFunction(Content)
Split.props = toFunction(Split)
Tiles.props = toFunction(Tiles)

// primitive components
// can be used outside of an MDX file
// but still retain the theme styles
export const Styled = React.forwardRef(({
  as = 'div',
  ...props
}, ref) => {
  const components = useMDXComponents()
  const tag = components[as] || 'div'
  return React.createElement(tag, {
    ...props,
    ref
  })
})

export const tags = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'ul',
  'ol',
  'li',
  'img',
  'a',
  'blockquote',
  'pre',
  'code',
  'inlineCode',
  'button',
  'div',
]

tags.forEach(tag => {
  Styled[tag] = React.forwardRef((props, ref) => <Styled ref={ref} as={tag} {...props} />)
})

// todo
// - [ ] MediaObjects layout
