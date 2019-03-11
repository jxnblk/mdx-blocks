import React from 'react'
import styled from '@emotion/styled'
import { fontFamily } from 'styled-system'
import { Provider } from '../src'
import Header from './header.mdx'
import Banner from './banner.mdx'
import Features from './features.mdx'
import Cards from './cards.mdx'
import Footer from './footer.mdx'

const theme = {
  fonts: {
    sans: '"Avenir Next", system-ui, sans-serif',
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
)
Root.defaultProps = {
  fontFamily: 'sans',
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

/*
*/
