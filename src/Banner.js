import React from 'react'
import Wrapper from './Wrapper'
import { Box, Container } from './ui'
import { getType } from './util'

// move to util component
const isImage = el => getType(el) === 'img' || el.type === 'img'
const getImages = elements => elements.filter(isImage)
const getRest = elements => elements.filter(el => !isImage(el))
const getImageSource = elements => {
  const [ img ] = getImages(elements)
  if (!img) return
  return img.props.src
}

const h1 = Box.props({
  as: 'h1',
  fontSize: [4, 5, 6],
  lineHeight: 1.25,
  fontWeight: 'bold',
  my: 3,
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
  m: 0,
})

const BackgroundImage = ({ src, ...props }) =>
  <Box
    {...props}
    css={{
      backgroundImage: [
        'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75))',
        `url(${src})`,
      ].join(','),
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />

const components = {
  h1,
  p,
  a,
}

export const Banner = ({
  children,
  ...props
}) =>
  <Wrapper
    components={components}
    children={children}
    render={elements => (
      <BackgroundImage {...props}
        src={getImageSource(elements)}>
        <Container>
          <Box
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
            <Box
              px={4}
              py={[4, 5]}>
              {getRest(elements)}
            </Box>
          </Box>
        </Container>
      </BackgroundImage>
    )}
  />

export const banner = defaults => props =>
  <Banner
    {...defaults}
    {...props}
  />

export default Banner
