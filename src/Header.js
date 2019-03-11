import React from 'react'
import Wrapper from './Wrapper'
import { Box } from './ui'
import { themeGet } from 'styled-system'

// move to general purpose components
const h1 = Box.props({
  as: 'h1',
  fontSize: 2,
  my: 0,
  ml: 3,
  mr: 'auto',
  css: {
  }
})

const ul = props =>
  <Box
    as='ul'
    {...props}
    my={0}
    mx={3}
    css={{
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
    }}
  />

const a = props =>
  <Box
    as='a'
    color='inherit'
    fontSize={1}
    px={2}
    py={3}
    {...props}
    css={theme => ({
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'block',
      '&:hover': {
        backgroundColor: themeGet('colors.hover')({ theme }),
      }
    })}
  />

const components = {
  h1,
  ul,
  a,
}

export const Header = ({ children, ...props }) =>
  <Wrapper
    children={children}
    components={components}
    render={elements => console.log(elements) || (
      <Box
        as='header'
        color='background'
        bg='text'
        {...props}
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        {elements}
      </Box>
    )}
  />

export default Header

/* how could this work?
const button = props =>
  <Box
    {...props}
    as='button'
    fontSize={1}
    color='background'
    bg='primary'
    css={{
      textDecoration: 'none',
      display: 'inline-block',
      fontFamily: 'inherit',
      appearance: 'none',
    }}
  />
*/

