import React from 'react'
import Block from './Block'
import Box from './Box'
import { getImages, getNonImages } from './util'

export const Split = ({
  children,
  ...props
}) =>
  <Block
    {...props}
    css={{}}
    styles={{}}>
    <Box
      maxWidth='container'
      mx='auto'
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
    </Box>
  </Block>

export const split = defaults => props =>
  <Split {...defaults} {...props} />

export default Split
