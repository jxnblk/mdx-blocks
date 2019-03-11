import React from 'react'
import { Provider } from '../src'
import Header from './header.mdx'
import Banner from './banner.mdx'
import Features from './features.mdx'
import Cards from './cards.mdx'

const theme = {
  colors: {
    // primary: 'tomato',
  },
}

export default () =>
  <Provider theme={theme}>
    <Header />
    <Banner />
    <Features />
    <Cards />
  </Provider>

/*
*/
