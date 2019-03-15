import React from 'react'
import {
  BlocksProvider,
  Primitive,
} from '..'
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
      }}>
      <Primitive.h1>Hello</Primitive.h1>
      <Primitive.h2>Hello</Primitive.h2>
      <h2>Hello</h2>
      <Features />
    </BlocksProvider>
  )
}
