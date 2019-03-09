import React from 'react'
import Chunk from './Chunk'
import Box from './Box'
import Container from './Container'

const test = el => /^h[1-6]/.test(el)

export const Tiles = props =>
  <Chunk
    {...props}
    test={test}
    render={chunks => {
      return (
        <Container>
          <Box
            css={{
              display: 'flex',
              flexWrap: 'wrap'
            }}>
            {chunks.map((children, i) => (
              <Box key={i}
                width={[1, 1/2]}
                p={4}>
                {children}
              </Box>
            ))}
          </Box>
        </Container>
      )
    }}
  />

export default Tiles
