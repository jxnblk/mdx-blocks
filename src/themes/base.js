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
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512,
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96, 128,
  ],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  maxWidths: {
    container: 1280,
  }
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

const img = styled.img({
  maxWidth: '100%',
  height: 'auto',
})

export const components = {
  a,
  img,
}

export default {
  theme,
  components,
}
