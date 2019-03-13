import React from 'react'
import styled from '@emotion/styled'
import {
  fontFamily,
  lineHeight,
  color,
} from 'styled-system'
import get from 'lodash.get'

export const Root = styled('div')(
  fontFamily,
  lineHeight,
  color,
  props => ({
    // 'h1, h2, h3, h4, h5, h6': {
    //   fontFamily: get(props.theme, 'fonts.heading'),
    //   lineHeight: get(props.theme, 'lineHeights.heading'),
    // },
    // a: {
    //   color: get(props.theme, 'colors.primary'),
    // }
  })
)

Root.defaultProps = {
  fontFamily: 'body',
  lineHeight: 'body',
  color: 'text',
  bg: 'background',
}

export default Root
