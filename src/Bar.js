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
        fontSize: 'inherit',
        margin: 0,
        padding: 16,
      },
      ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        paddingRight: 16,
        paddingLeft: 16,
        marginTop: -16,
        marginBottom: -16,
      },
      li: {
        display: 'flex',
      },
      a: {
        padding: 8,
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


