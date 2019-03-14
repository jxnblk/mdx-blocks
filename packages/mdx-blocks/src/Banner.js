import React from 'react'
import Block from './Block'
import Box from './Box'
import {
  getImageSource,
  getNonImages,
} from './util'

const { toArray } = React.Children

const background = ({ darken = 0.75, children }) => {
  const src = getImageSource(toArray(children))
  return {
    backgroundImage: [
      `linear-gradient(rgba(0, 0, 0, ${darken / 4}), rgba(0, 0, 0, ${darken}))`,
      `url(${src})`,
    ].join(', ')
  }
}

export const Banner = ({
  ...props
}) =>
  <Block
    pt={5}
    pb={5}
    {...props}
    data-banner
    css={{
      ...background(props),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Box
        maxWidth='container'
        mx='auto'
        px={4}>
      {getNonImages(toArray(props.children))}
    </Box>
  </Block>

export const banner = defaults => props =>
  <Banner
    {...defaults}
    {...props}
  />

export default Banner
