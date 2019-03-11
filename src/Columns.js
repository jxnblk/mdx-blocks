import React from 'react'
import Wrapper from './Wrapper'
import { themeGet } from 'styled-system'
import {
  Box,
  Container,
} from './ui'

const ul = Box.props({
  as: 'ul',
  m: 0,
  p: 0,
  css: {
    listStyle: 'none',
  }
})

const li = Box.props({
  as: 'li',
  fontWeight: 'bold',
  my: 2,
})

const a = Box.props({
  as: 'a',
  fontWeight: 'bold',
  css: theme => ({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: themeGet('colors.primary')({ theme }),
    }
  })
})

const _components = {
  ul,
  li,
  a,
}

export const Columns = ({
  components,
  children,
  ...props
}) =>
  <Wrapper
    components={{ ..._components, ...components }}
    children={children}
    render={elements => console.log(elements) || (
      <Box
        {...props}>
        <Container
          css={{
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          {elements.map((el, i) => (
            <Box
              key={i}
              width={[ 1/2, 1/2, 1/4 ]}
              p={4}
            >
              {el}
            </Box>
          ))}
        </Container>
      </Box>
    )}
  />
