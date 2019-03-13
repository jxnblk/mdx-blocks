import styled from '@emotion/styled'
import {
  space,
  color,
  width,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  maxWidth,
} from 'styled-system'

export const Box = styled('div')({
  boxSizing: 'border-box',
  minWidth: 0,
},
  space,
  color,
  width,
  maxWidth,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
)

export default Box
