import React from 'react'
import Block from './Block'
import {
  Box,
  BackgroundImage,
  Container
} from './ui'
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
    <Container px={4}>
      {getNonImages(children)}
    </Container>
  </Block>

export const banner = defaults => props =>
  <Banner
    {...defaults}
    {...props}
  />

export default Banner
