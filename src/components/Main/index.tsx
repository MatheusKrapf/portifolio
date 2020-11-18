import React from 'react'

import * as S from './styles'

const Main = ({
  title = 'Boilerplate',
  description = 'TS, NextJs, ReactJS & Styled Components'
}) => {
  return (
    <S.Container>
      <S.Logo
        src="/img/logo.svg"
        alt="imagem de um átomo e descrição react avançado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor em frente ao computador"
      />
    </S.Container>
  )
}

export default Main
