import React from 'react'
import Wrapper from './Wrapper'
import { getType, chunkElements } from './util'

export const Chunk = ({
  tag,
  test,
  render,
  ...props
}) => {
  test = test || (el => getType(el) === tag)
  return (
    <Wrapper
      {...props}
      render={elements => (
        render(
          chunkElements(test)(elements)
        )
      )}
    />
  )
}

export default Chunk
