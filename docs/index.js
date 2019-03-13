import React from 'react'
import styled from '@emotion/styled'
import {
  fontFamily,
  lineHeight
} from 'styled-system'
import { Provider } from '../src'
import Header from './header.mdx'
import Banner from './banner.mdx'
import Features from './features.mdx'
import Cards from './cards.mdx'
import Footer from './footer.mdx'

import { ThemeProvider } from 'emotion-theming'

const theme = {
  fonts: {
    body: '"Avenir Next", system-ui, sans-serif',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    bold: 600,
  },
  colors: {
    // primary: 'tomato',
  },
}

const Root = styled('div')(
  fontFamily,
  lineHeight,
)
Root.defaultProps = {
  fontFamily: 'body',
  lineHeight: 'body',
}

export default () =>
  <Provider theme={theme}>
    <Root>
      <Header />
      <Banner />
      <Features />
      <Cards />
      <Footer />
    </Root>
  </Provider>

