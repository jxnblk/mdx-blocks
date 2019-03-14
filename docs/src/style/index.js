import React from 'react'
import { MDXStyle, theme } from 'mdx-style'
import Readme from 'mdx-blocks/README.md'

export default props => {
  return (
    <MDXStyle
      as='main'
      px={4}
      mx='auto'
      css={{
        maxWidth: 768,
      }}
      components={{
        h1: {
          fontSize: [6, 7, 8, 9],
          m: 0,
        },
        a: {
          color: 'tomato',
        },
        pre: {
          color: 'white',
          bg: 'primary',
        }
      }}
    >
      <Readme />
    </MDXStyle>
  )
  // <pre children={JSON.stringify(theme.fontSizes, null, 2)} />
}

/*
  <div
    css={{
      display: 'grid',
      gridTemplateColumns: `1fr minmax(auto, 40em) 1fr`,
    }}>
      <div />
      <main />
      <div />
  </div>
*/
