import React from 'react'
import { Rects } from './rects'
import { funk } from '../../themes'

const { colors } = funk.theme
colors.yellow = '#ec0'

export default ({
  size = 256
}) =>
  <Rects
    width={size}
    height={size}
    value={[
      [ 0, 8, 8, 8, colors.primary ],
      [ 0, 16, 16, 8, colors.highlight ],
      [ 16, 0, 8, 12, colors.primary ],
      [ 4, 4, 16, 16, 'none', 'black' ],
      [ 14, 10, 8, 8, 'none', 'black' ],
    ]}
  />

