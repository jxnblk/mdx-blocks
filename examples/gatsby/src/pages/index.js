import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Provider } from 'mdx-blocks'
import Header from './header.mdx'

export default props =>
  <Provider>
    <Header />
    <h1>hello</h1>
  </Provider>
