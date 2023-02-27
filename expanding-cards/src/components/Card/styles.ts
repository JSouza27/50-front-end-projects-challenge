import styled, { css } from 'styled-components'

import { CardProps } from '.'

type ContainerProps = Pick<CardProps, 'isActive' | 'image'>

export const Container = styled.div<ContainerProps>`
  ${({ theme, isActive, image }) => css`
    align-items: flex-end;
    background-color: ${theme.colors.secondary};
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5rem;
    cursor: pointer;
    display: flex;
    flex: ${isActive ? '5' : '0'};
    flex-basis: ${isActive ? '30rem' : '3rem'};
    height: 80vh;
    padding: ${theme.spacings.medium};
    transition: flex ${theme.transition.default};
  `}
`
