import React from 'react'

import * as S from './styles'

const fotoImage = '/img/about/foto.png'

const About = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Sobre mim</S.Title>

        <S.AboutContainer>
          <S.TextContainer>
            <S.Name>Matheus Krapf</S.Name>
            <S.Description>
              Atualmente tenho 26 anos e sou formado no curso técnico de{' '}
              <strong>Manutenção e Suporte em informática</strong> no IFSP
              Itapetininga e no momento cursando{' '}
              <strong>Análise e Desenvolvimento de Sistemas</strong> na Fatec
              Itapetininga, comecei na área de Front-End como estágiario e
              atualmente atuo como Front-End Jr.
            </S.Description>
          </S.TextContainer>

          <S.PhotoContainer>
            <img src={fotoImage} alt="foto" />
          </S.PhotoContainer>
        </S.AboutContainer>
      </S.Content>
    </S.Container>
  )
}

export default About
