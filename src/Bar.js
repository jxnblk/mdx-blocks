import React from 'react'
import Block from './Block'

export const Bar = ({ children, ...props }) =>
  <Block
    {...props}
    data-bar
    css={{
      display: 'flex',
      flexWrap: 'wrap',
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
        flexWrap: 'wrap',
        alignItems: 'center',
        m: 0,
        p: 0,
      },
      li: {
        display: 'flex',
      },
      a: {
        p: 3,
        m: 0,
        color: 'inherit',
        '&:hover': {
          color: 'inherit',
        }
      },
      button: {
        mx: 3,
      }
    }}>
    {children}
  </Block>

export const bar = defaults => props =>
  <Bar {...defaults} {...props} />

export default Bar


