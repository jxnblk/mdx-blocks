import React from 'react'
import {
  MDXStyle,
  BlocksProvider,
  Block,
  Box
} from '../../index'
import themes from '../../themes'
import { Link } from '../components'
import Sidebar from './sidebar.mdx'
import Header from '../header.mdx'
import Footer from '../footer.mdx'

const mobile = '@media screen and (max-width:40em)'

const theme = {
  ...themes.funk,
  components: {
    ...themes.funk.components,
    inlineCode: {
      color: 'primary',
    },
    pre: {
      color: 'primary',
      bg: 'muted',
    }
  },
}

export default props =>
  <BlocksProvider
    baseComponents={{
      a: Link,
      button: Link,
    }}
    {...theme}>
    <Box
      css={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Header />
      <Box
        css={{
          flex: '1 1 auto',
          display: 'flex',
          [mobile]: {
            flexDirection: 'column',
          }
        }}>
        <Block
          width={[ 1, 256, 320 ]}
          py={3}
          bg='muted'
          css={{
            position: 'sticky',
            top: 0,
            maxHeight: '100vh',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
          baseComponents={{
            ul: {
              listStyle: 'none',
              m: 0,
              p: 0,
              [mobile]: {
                display: 'flex',
                flexWrap: 'wrap',
              }
            },
            a: {
              display: 'block',
              fontWeight: 'bold',
              px: 3,
              py: [1, 2],
              '&:hover': {
                textDecoration: 'none',
                color: 'black',
              },
              '&.active': {
                color: 'highlight',
              }
            }
          }}
        >
          <Sidebar />
        </Block>
        <Box width={1}>
          <Box
            mx='auto'
            px={4}
            py={4}
            maxWidth={768}>
            {props.children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  </BlocksProvider>
