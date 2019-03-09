import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from '../src'
import Header from './header.mdx'
import Banner from './banner.mdx'
import Features from './features.mdx'

export default () =>
  <Provider>
    <Header />
    <Banner />
    <Features />
  </Provider>
