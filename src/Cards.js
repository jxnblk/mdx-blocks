import React from 'react'
import { Box, Container } from './ui'
import { chunkElements } from './util'

const getChunks = chunkElements(el => el === 'img')

export const Cards = ({
  widths = [ 1, 1/2 ],
  children,
  ...props
}) =>
  <Box {...props}>
    <Container
      css={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
      {getChunks(children).map((chunk, i) => (
        <Box
          key={i}
          width={widths}
          p={4}>
          {chunk}
        </Box>
      ))}
    </Container>
  </Box>

export const cards = defaults => props =>
  <Cards {...defaults} {...props} />

export default Cards
