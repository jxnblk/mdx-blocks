import React from 'react'
import { Box, Container } from './ui'
import { chunkElements, isHeading } from './util'

const getChunks = chunkElements(isHeading)

export const Tiles = ({
  widths = [ 1, 1/2 ],
  children,
  ...props
}) =>
  <Box {...props}>
    <Container
      css={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {getChunks(children).map((chunk, i) => (
        <Box
          key={i}
          p={4}
          width={widths}>
          {chunk}
        </Box>
      ))}
    </Container>
  </Box>

export const tiles = defaults => props =>
  <Tiles {...defaults} {...props} />

export default Tiles
