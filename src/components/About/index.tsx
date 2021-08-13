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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              laborum perferendis nulla illum sunt atque quidem ut, dolor.
              Suscipit blanditiis commodi a soluta itaque quae omnis, velit
              voluptas voluptatum repudiandae. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Est iste incidunt, et nam pariatur
              sit totam quos id ex dolorem deleniti, autem tempore eaque dolores
              quibusdam obcaecati, veritatis mollitia consequuntur.
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
