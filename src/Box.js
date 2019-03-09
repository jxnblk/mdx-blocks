import styled from '@emotion/styled'
import {
  space,
  color,
  width,
  fontSize,
} from 'styled-system'

export const Box = styled('div')({
  boxSizing: 'border-box',
  minWidth: 0,
},
  space,
  color,
  width,
  fontSize
)

Box.props = (_props) => props =>
  <Box
    {..._props}
    {...props}
  />

export default Box
