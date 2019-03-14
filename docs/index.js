import React from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import {
  fontFamily,
  lineHeight
} from 'styled-system'
import pkg from '../package.json'
import { Provider, themes } from '../src'

import Header from './header.mdx'
import Banner from './banner.mdx'
import Features from './features.mdx'
import Cards from './cards.mdx'
import Centered from './centered.mdx'
import Split from './split.mdx'
import Columns from './columns.mdx'
import Footer from './footer.mdx'

export default () =>
  <Provider {...themes.funk}>
    <Helmet>
      <title>MDX Blocks</title>
      <meta
        name='description'
        content={pkg.description}
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Poppins400:700:900|Roboto+Mono|Roboto400:600:700'
      />
    </Helmet>
    <Header />
    <Banner />
    <Features />
    <Cards />
    <Centered />
    <Split />
    <Columns />
    <Footer />
  </Provider>

