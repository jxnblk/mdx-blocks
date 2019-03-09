import React from 'react'
import Wrapper from './Wrapper'
import Box from './Box'
import { getType } from './util'

// move to util component
const isImage = el => getType(el) === 'img' || el.type === 'img'
const getImages = elements => elements.filter(isImage)
const getRest = elements => elements.filter(el => !isImage(el))

const h1 = Box.props({
  as: 'h1',
  fontSize: [4, 5, 6],
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
    borderRadius: 16,
  }
})

const p = Box.props({
  fontSize: [2, 3],
})

const img = Box.props({
  as: 'img',
  css: {
    maxWidth: '100%',
    height: 'auto',
  }
})

const components = {
  h1,
  p,
  a,
  img,
}

export const Banner = ({
  children,
  ...props
}) =>
  <Wrapper
    components={components}
    children={children}
    render={elements => (
      <Box
        p={5}
        {...props}
        css={{
          display: 'flex',
          alignItems: 'center'
        }}>
        <Box px={4}>
          {getRest(elements)}
        </Box>
        <Box css={{ flex: 'none' }}>
          {getImages(elements)}
        </Box>
      </Box>
    )}
  />

export default Banner
