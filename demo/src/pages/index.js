import React from 'react'
import { BlocksProvider } from 'mdx-blocks'
import Header from './header.mdx'
import Banner from './banner.mdx'
import Features from './features.mdx'
import Cards from './cards.mdx'
import Centered from './centered.mdx'
import Split from './split.mdx'
import Columns from './columns.mdx'
import Footer from './footer.mdx'

import { funk as theme } from 'mdx-blocks/themes'

/*
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
*/

export default props =>
  <BlocksProvider
    {...theme}>
    <Header />
    <Banner />
    <Features />
    <Cards />
    <Centered />
    <Split />
    <Columns />
    <Footer />
  </BlocksProvider>
