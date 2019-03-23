import React from 'react'
import styled from '@emotion/styled'
import { ComponentProvider, useComponents } from 'emotion-mdx'
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
export const baseTheme = {
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

const baseStyles = {
  a: ({
    color: 'primary',
    textDecoration: 'none',
    '&:hover': {
      color: 'secondary',
      textDecoration: 'underline',
    },
    '&[title=button]': {
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
    }
  }),
  code: {
    fontFamily: 'monospace',
  },
  inlineCode: {
    fontFamily: 'monospace',
  },
  pre: {
    fontFamily: 'monospace',
    p: 3,
    overflowX: 'auto',
  },
  h1: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    fontSize: 6,
  },
  h2: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    fontSize: 5,
  },
  h3: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    fontSize: 4,
  },
  h4: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    fontSize: 3,
  },
  h5: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    fontSize: 2,
  },
  h6: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
    fontSize: 1,
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
}

export const Root = styled.div(system({
  fontFamily: 'body',
  lineHeight: 'body',
  color: 'text',
  bg: 'background',
}))

export const BlocksProvider = ({
  baseComponents,
  components,
  theme,
  ...props
}) =>
  <ComponentProvider
    theme={baseTheme}
    components={baseComponents}
    styles={baseStyles}
    transform={system}>
    <ComponentProvider
      theme={theme}
      styles={components}>
      <Root {...props} />
    </ComponentProvider>
  </ComponentProvider>

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
  // baseComponents={baseComponents}
  <ComponentProvider
    styles={merge({}, baseComponents, components)}>
    <Box
      data-block
      {...props}
    />
  </ComponentProvider>

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
        },
        '&[title=button]': {
          mx: 3,
        }
      },
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
const toFunction = Component => defaults => props =>
  <Component {...defaults} {...props} />

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
  const components = useComponents()
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
  'div',
  // todo: add the rest
]

tags.forEach(tag => {
  Styled[tag] = React.forwardRef((props, ref) => <Styled ref={ref} as={tag} {...props} />)
})

// - [ ] MediaObjects layout
