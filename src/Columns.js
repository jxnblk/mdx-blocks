import React from 'react'
import Block from './Block'
import Box from './Box'

export const Columns = ({
  children,
  ...props
}) =>
  <Block
    {...props}
    data-columns
    styles={{
      ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }
    }}>
    <Box
      maxWidth='container'
      mx='auto'
      css={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {children.map((child, i) => (
        <Box
          key={i}
          width={[ 1, 1 / children.length ]}
          p={4}>
          {child}
        </Box>
      ))}
    </Box>
  </Block>

export const columns = defaults => props =>
  <Columns {...defaults} {...props} />

export default Columns
