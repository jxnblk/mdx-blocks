import React from 'react'
import styled from '@emotion/styled'
import { space, color } from 'styled-system'

const Svg = styled('svg')({},
  space
)

export const Rects = ({
  width = 128,
  height = 128,
  value = [],
  frame = false,
  ...props
}) =>
<Svg
  viewBox={`0 0 ${width/height * 24} 24`}
  width={width}
  height={height}
  strokeWidth='0.5'
  {...props}
>
  {frame && (
    <rect
      width={width/height * 24}
      height={24}
      fill='white'
      stroke='lightgray'
      vectorEffect='non-scaling-stroke'
      strokeWidth={1}
    />
  )}
  {value.map(([ x, y, w, h, fill = 'tomato', stroke = 'none' ], i) => (
    <rect
      key={i}
      x={x}
      y={y}
      width={w}
      height={h}
      fill={fill}
      stroke={stroke}
    />
  ))}
</Svg>

export default () =>
  <pre>rect</pre>
