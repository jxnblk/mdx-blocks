import React from 'react'
import {
  BlocksProvider,
  Styled,
} from '../index'
import themes from '../themes'
import Features from './features.mdx'

export default props => {
  return (
    <BlocksProvider
      {...themes.future}
      py={4}
      components={{
        h1: {
          color: 'orange',
        },
        p: {
          fontSize: [3, 4],
        }
      }}>
      <Styled.div
        mx='auto'
        py={4}
        px={4}
        css={{
          maxWidth: 1024
        }}>
        <Styled.h1>Styled Primitives</Styled.h1>
        <Styled.p>
          The `Styled` primitive components allow you to use themed components outside of an MDX file.
          They can be targeted with the BlocksProvider component to change the underlying component or adjust styles, and their styles should match those from MDX.
        </Styled.p>
      </Styled.div>
      <Features />
    </BlocksProvider>
  )
}
