import React from 'react'

import * as S from './styles'

const TheEnd = '/img/erro/theend.png'

const Error = () => {
  return (
    <S.Container>
      <S.Content>
        <S.GlitchContent>
          <S.Glitch data-text="Erro 404">Erro 404</S.Glitch>
        </S.GlitchContent>
      </S.Content>
      <S.EvaImage>
        <img src={TheEnd} alt="" />
      </S.EvaImage>
    </S.Container>
  )
}

export default Error
