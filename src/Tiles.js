import React from 'react'
import Chunk from './Chunk'
import { Box, Container } from './ui'
import { isHeading } from './util'

export const Tiles = props =>
  <Chunk
    {...props}
    test={isHeading}
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
