import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    flex-direction: column;
    padding: ${theme.spacings.medium};
    max-width: ${theme.grid.container};

    @media (min-width: 76rem) {
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      padding: ${theme.spacings.xxlarge};
    }
  `}
`
