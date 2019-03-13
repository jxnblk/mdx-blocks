import React from 'react'
import { Box, Container } from './ui'
import Block from './Block'
import { chunkElements } from './util'

const getChunks = chunkElements(el => el === 'img')

export const Cards = ({
  widths = [ 1, 1/2 ],
  children,
  ...props
}) =>
  <Block {...props}>
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
  </Block>

export const cards = defaults => props =>
  <Cards {...defaults} {...props} />

export default Cards
