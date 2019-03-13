import React from 'react'
import Block from './Block'
import { Box, Container } from './ui'
import { getImages, getNonImages } from './util'

export const Split = ({
  children,
  ...props
}) =>
  <Block
    {...props}
    css={{}}
    styles={{}}>
    <Container
      css={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
      <Box
        p={4}
        width={[ 1, 1/2 , 2/5 ]}>
        {getNonImages(children)}
      </Box>
      <Box
        p={4}
        width={[ 1, 1/2 , 3/5 ]}>
        {getImages(children)}
      </Box>
    </Container>
  </Block>

export const split = defaults => props =>
  <Split {...defaults} {...props} />

export default Split
