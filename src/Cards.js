import React from 'react'
import Block from './Block'
import Box from './Box'
import { chunkElements } from './util'

const getChunks = chunkElements(el => el === 'img')

export const Cards = ({
  widths = [ 1, 1/2 ],
  children,
  ...props
}) =>
  <Block {...props}>
    <Box
      maxWidth='container'
      mx='auto'
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
    </Box>
  </Block>

export const cards = defaults => props =>
  <Cards {...defaults} {...props} />

export default Cards
