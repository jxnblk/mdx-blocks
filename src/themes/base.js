import styled from '@emotion/styled'
import system from './system'

export const theme = {
  colors: {
    text: 'black',
    background: 'white',
    primary: '#07c',
    secondary: '#05a',
    highlight: '#e40',
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
    bold: 700,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  maxWidths: {
    container: 1280,
  }
}

// components
const a = styled.a(system({
  color: 'primary',
  textDecoration: 'none',
  '&:hover': {
    color: 'secondary',
    textDecoration: 'underline',
  }
}))

// <a title='button'> is converted to this component
const button = styled.a(system({
  display: 'inline-block',
  alignSelf: 'center',
  textDecoration: 'none',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  borderRadius: 6,
  '&:hover': {
    bg: 'secondary',
  }
}))

const img = styled.img({
  maxWidth: '100%',
  height: 'auto',
})

const Heading = styled.h1(system({
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  my: 1,
}))

const heading = (tag, styles) =>
  styled(Heading)(system(styles)).withComponent(tag)

const h1 = heading('h1', { fontSize: 6 })
const h2 = heading('h2', { fontSize: 5 })
const h3 = heading('h3', { fontSize: 4 })
const h4 = heading('h4', { fontSize: 3 })
const h5 = heading('h5', { fontSize: 2 })
const h6 = heading('h6', { fontSize: 1 })

export const components = {
  a,
  button,
  img,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}

export default {
  theme,
  components,
}
