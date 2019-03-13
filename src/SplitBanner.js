import React from 'react'
import { Box, Container } from './ui'
import { getType } from './util'

// move to util component
const isImage = el => getType(el) === 'img' || el.type === 'img'
const getImages = elements => elements.filter(isImage)
const getRest = elements => elements.filter(el => !isImage(el))

export const SplitBanner = ({
  children,
  ...props
}) => false
  /* TODO update API
  <Wrap
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
  */

export default SplitBanner
