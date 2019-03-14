import React from 'react'
import { MDXStyle, theme } from 'mdx-style'
import Readme from 'mdx-blocks/README.md'

export default props => {
  return (
    <MDXStyle
      px={4}
      py={5}
      components={{
        h1: {
          fontSize: [6, 7, 8, 9],
          m: 0,
          color: 'highlight',
        }
      }}
    >
      <Readme />
    </MDXStyle>
  )
  // <pre children={JSON.stringify(theme.fontSizes, null, 2)} />
}
