import React from 'react'
import styled from '@emotion/styled'
import {
  fontFamily,
  lineHeight,
  color,
} from 'styled-system'
import system from './system'

export const Root = styled('div')(system({
  fontFamily: 'body',
  lineHeight: 'body',
  color: 'text',
  bg: 'background',
}))

export default Root
