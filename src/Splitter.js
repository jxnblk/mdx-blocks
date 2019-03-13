// prototype for inline layout elements
import React from 'react'
import Wrapper from './wrapper'
import {
  Box,
} from './ui'
import { getType } from './util'

const split = elements => {
  const chunks = elements.reduce((a, el, index) => {
    const i = a.length - 1
    if (el.props.layout) {
      a.push(React.cloneElement(el, { children: [] }))
      // const props = a[i].props
      // a[i] = React.cloneElement(el, props)
    } else {
      a[i].props.children.push(el)
    }
    return a
  }, [<React.Fragment children={[]} />])
  console.log(chunks)
  return React.Children.toArray(chunks)
}

export const Centered = props =>
  <Box
    {...props}
    css={{
      textAlign: 'center',
    }}
  />
Centered.defaultProps = {
  layout: true,
}

export const Banner = props => {
  const [ image ] = props.children.filter(el => {
    return getType(el) === 'img'
  })
  const other = props.children.filter(el => {
    return getType(el) !== 'img'
  })
  return (
    <Box {...props}
      css={{
        display: 'flex',
        img: {
          maxWidth: '100%',
          height: 'auto',
        }
      }}>
      <Box width={1/2}>
      {image}
      </Box>
      <Box width={1/2}>
        {other}
      </Box>
    </Box>
  )
}
Banner.defaultProps = {
  layout: true,
}

export const Root = ({
  children,
  ...props
}) =>
  <Wrapper
    children={children}
    render={elements => (
      <Box {...props}>
        {split(elements)}
      </Box>
    )}
  />

export default Root
