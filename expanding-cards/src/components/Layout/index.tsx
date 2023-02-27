import React from 'react'

import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <S.Wrapper>{children}</S.Wrapper>
}
