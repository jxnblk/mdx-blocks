import React from 'react'
import Wrapper from './Wrapper'
import { Box, Container } from './ui'
import { getType } from './util'

// move to util component
const isImage = el => getType(el) === 'img' || el.type === 'img'
const getImages = elements => elements.filter(isImage)
const getRest = elements => elements.filter(el => !isImage(el))

const h1 = Box.props({
  as: 'h1',
  fontSize: [4, 5, 6],
  lineHeight: 1.25,
  css: {}
})

const a = Box.props({
  as: 'a',
  fontSize: 1,
  color: 'background',
  bg: 'primary',
  px: 3,
  py: 3,
  my: 4,
  css: {
    display: 'inline-block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    fontWeight: 'bold',
    borderRadius: 4,
  }
})

const p = Box.props({
  fontSize: [2, 3],
})

const components = {
  // h1,
  // p,
  a,
}

export const SplitBanner = ({
  children,
  ...props
}) =>
  <Wrapper
    components={components}
    children={children}
    render={elements => (
      <Box {...props}>
        <Container>
          <Box
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}>
            <Box
              width={[ 1, 1/2, 2/5 ]}
              px={4}
              py={4}>
              {getRest(elements)}
            </Box>
            <Box
              width={[ 1, 1/2, 3/5 ]}
              px={4}
              py={4}
              css={{ flex: 'none' }}>
              {getImages(elements)}
            </Box>
          </Box>
        </Container>
      </Box>
    )}
  />

export default SplitBanner
