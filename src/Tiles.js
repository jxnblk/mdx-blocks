import React from 'react'
import Block from './Block'
import { Box, Container } from './ui'
import { chunkElements, isHeading } from './util'

const getChunks = chunkElements(isHeading)

export const Tiles = ({
  widths = [ 1, 1/2 ],
  children,
  ...props
}) =>
  <Block {...props}>
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
  </Block>

export const tiles = defaults => props =>
  <Tiles {...defaults} {...props} />

export default Tiles
