import React from 'react'
import styled from '@emotion/styled'
import {
  fontFamily,
  lineHeight
} from 'styled-system'
import { Provider } from '../src'
import {
  Root,
  base,
} from '../src/themes'

import Header from './header.mdx'
import Banner from './banner.mdx'
import Features from './features.mdx'
import Cards from './cards.mdx'
import Footer from './footer.mdx'

export default () =>
  <Provider
    theme={base.theme}
    components={base.components}>
    <Root>
      <Header />
      <Banner />
      <Features />
      <Cards />
      <Footer />
    </Root>
  </Provider>

