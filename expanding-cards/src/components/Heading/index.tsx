import React from 'react'

import theme from '../../styles/theme'
import * as S from './styles'

export type HeadingProps = {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.font.sizes
  fontWeigth?: 'light' | 'normal' | 'bold'
  lineHeigth?: string | number
  level?: 1 | 2 | 3 | 4 | 5 | 6
  textTransform?: 'none' | 'capitalize'
  children: React.ReactNode
}

export default function Heading({
  children,
  color = 'primary',
  fontWeigth = 'bold',
  level,
  lineHeigth = 1.5,
  size = 'xlarge',
  textTransform = 'capitalize'
}: HeadingProps) {
  return (
    <S.Wrapper
      color={color}
      fontWeigth={fontWeigth}
      level={level}
      lineHeigth={lineHeigth}
      size={size}
      textTransform={textTransform}
    >
      {children}
    </S.Wrapper>
  )
}
