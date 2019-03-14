import React from 'react'
import Block from './Block'

export const Center = ({
  children,
  ...props
}) =>
  <Block
    p={4}
    {...props}
    data-center
    css={{
      textAlign: 'center',
    }}>
    {children}
  </Block>

export const center = defaults => props =>
  <Center {...defaults} {...props} />

export default Center
