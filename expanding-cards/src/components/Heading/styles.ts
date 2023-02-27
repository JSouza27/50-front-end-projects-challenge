import styled, { css } from 'styled-components'

import { HeadingProps } from '.'

export const Wrapper = styled.h1.attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ color, size, fontWeigth, lineHeigth, textTransform, theme }) => css`
    color: ${theme.colors[color!]};
    font-size: clamp(
      ${theme.font.sizes.small},
      2.6vw + 4.8rem,
      ${theme.font.sizes[size!]}
    );
    font-weight: ${theme.font[fontWeigth!]};
    line-height: ${lineHeigth};
    text-transform: ${textTransform};
  `}
`
