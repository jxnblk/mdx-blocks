import React from 'react'
import { Box } from './ui'

export const Bar = ({ children, ...props }) =>
  <Box
    {...props}
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& > *': {
        margin: 0,
        padding: 16,
      },
      'h1, h2, h3, h4': {
        fontSize: 'inherit',
      },
      '& > ul': {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        marginTop: -16,
        marginBottom: -16,
        '& > li': {
          display: 'flex',
        }
      },
      'a': {
        padding: 16,
      }
    }}>
    {children}
  </Box>

export const bar = defaults => props =>
  <Bar {...defaults} {...props} />

export default Bar


