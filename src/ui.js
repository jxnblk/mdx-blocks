// UI component primitives
import React from 'react'
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
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
)

export const Container = styled(Box)(maxWidth)

Container.defaultProps = {
  className: 'Container',
  mx: 'auto',
  maxWidth: 'container',
}

