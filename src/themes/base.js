import React from 'react'
import styled from '@emotion/styled'
import system from './system'

export const theme = {
  colors: {
    text: 'black',
    background: 'white',
    primary: '#53f',
    secondary: '#0c0047',
    highlight: '#e3f',
    muted: '#fafafe',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
}

const Button = styled.a({
  display: 'inline-block',
  alignSelf: 'center',
  textDecoration: 'none',
}, system({
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  borderRadius: 6,
  '&:hover': {
    bg: 'secondary',
  }
}))

const Link = styled.a(system({
  color: 'primary',
  textDecoration: 'none',
  '&:hover': {
    color: 'secondary',
    textDecoration: 'underline',
  }
}))

const a = props => {
  if (props.title === 'button') {
    return <Button {...props} />
  }
  return <Link {...props} />
}
export const components = {
  a,
}
