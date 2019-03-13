import React from 'react'
import Block from './Block'
import Box from './Box'
import {
  getImageSource,
  getNonImages,
} from './util'

export const Banner = ({
  children,
  ...props
}) =>
  <Block
    {...props}
    css={{
      backgroundImage: `url(${getImageSource(children)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <Box maxWidth='container' mx='auto' px={4}>
      {getNonImages(children)}
    </Box>
  </Block>

export const banner = defaults => props =>
  <Banner
    {...defaults}
    {...props}
  />

export default Banner
