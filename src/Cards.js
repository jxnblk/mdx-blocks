import React from 'react'
import Chunk from './Chunk'
import { Box, Container } from './ui'

export const Cards = props =>
  <Chunk
    {...props}
    test={tag => tag === 'img'}
    render={chunks => (
      <Container>
        <Box
          css={{
            display: 'flex',
            flexWrap: 'wrap'
          }}>
          {chunks.map((children, i) => (
            <Box
              key={i}
              width={[ 1, 1/2 ]}
              p={4}>
              {children}
            </Box>
          ))}
        </Box>
      </Container>
    )}
  />

export default Cards
