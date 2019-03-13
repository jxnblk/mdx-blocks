import React from 'react'
import { Box } from './ui'

const img = props =>
  <img
    {...props}
    css={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />

export const components = {
  img,
}

export default components
