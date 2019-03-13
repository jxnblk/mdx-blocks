// UI component primitives
import React from 'react'
import styled from '@emotion/styled'
import {
  space,
  color,
  width,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  maxWidth,
} from 'styled-system'

export const Box = styled('div')({
  boxSizing: 'border-box',
  minWidth: 0,
},
  space,
  color,
  width,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
)

Box.props = (base) => props =>
  <Box
    {...base}
    {...props}
  />

export const Container = styled(Box)(maxWidth)

Container.defaultProps = {
  mx: 'auto',
  maxWidth: 'maxWidth',
}

export const BackgroundImage = styled(Box)(props => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${props.src})`,
  // gradient?
}))

/*
 * - [ ] Heading (h1-h6)
 * - [ ] Text (p, blockquote, etc)
 * - [ ] Button
 * - [ ] Link
 * - [ ] NavLink
 * - [ ] BackgroundImage (for aspect ratio)
 *
 */
