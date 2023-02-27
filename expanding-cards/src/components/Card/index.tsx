import React from 'react'
import Heading from '../Heading'

import * as S from './styles'

export type CardProps = {
  title: string
  image: string
  handleChange: () => void
  isActive: boolean
}

export default function Card({
  title,
  image,
  handleChange,
  isActive
}: CardProps) {
  return (
    <S.Container onClick={handleChange} isActive={isActive} image={image}>
      {isActive && (
        <Heading
          level={1}
          color="white"
          size="xxlarge"
          textTransform="capitalize"
        >
          {title}
        </Heading>
      )}
    </S.Container>
  )
}
