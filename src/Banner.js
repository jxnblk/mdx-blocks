import React from 'react'
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
  <BackgroundImage
    {...props}
    src={getImageSource(children)}>
    <Container>
      {getNonImages(children)}
    </Container>
  </BackgroundImage>

export const banner = defaults => props =>
  <Banner
    {...defaults}
    {...props}
  />

export default Banner
