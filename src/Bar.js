import React from 'react'
import Block from './Block'

export const Bar = ({ children, ...props }) =>
  <Block
    {...props}
    data-bar
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    styles={{
      h1: {
        p: 3,
        m: 0,
        fontSize: 'inherit',
      },
      ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        p: 0,
        px: 3,
        my: -3,
      },
      li: {
        display: 'flex',
      },
      a: {
        p: 2,
        color: 'inherit',
        '&:hover': {
          color: 'inherit',
        }
      }
    }}>
    {children}
  </Block>

export const bar = defaults => props =>
  <Bar {...defaults} {...props} />

export default Bar


