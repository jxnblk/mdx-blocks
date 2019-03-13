import React from 'react'
import {
  Box,
  Container,
} from './ui'

export const Columns = ({
  children,
  ...props
}) =>
  <Box {...props}
    css={{
      ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }
    }}>
    <Container
      css={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {children.map((child, i) => (
        <Box
          key={i}
          width={[ 1, 1 / children.length ]}
          p={4}>
          {child}
        </Box>
      ))}
    </Container>
  </Box>

export const columns = defaults => props =>
  <Columns {...defaults} {...props} />

export default Columns
