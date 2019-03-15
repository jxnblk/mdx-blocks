import React from 'react'
import {
  BlocksProvider,
  Styled,
} from '..'
import themes from '../themes'
import Features from './features.mdx'

export default props => {
  return (
    <BlocksProvider
      {...themes.future}
      px={4}
      py={4}
      components={{
        h1: {
          color: 'orange',
        },
        p: {
          fontSize: [3, 4],
        }
      }}>
      <Styled.h1>Styled Primitives</Styled.h1>
      <Styled.p>
        The `Styled` primitive components allow you to use themed components outside of an MDX file.
        They can be targeted with the BlocksProvider component to change the underlying component or adjust styles
      </Styled.p>
      <Features />
    </BlocksProvider>
  )
}
