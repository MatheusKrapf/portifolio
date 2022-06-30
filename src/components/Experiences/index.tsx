﻿import React from 'react'

import * as S from './styles'

const Experiences = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Experiências</S.Title>
        <S.ExperiencesContainer>
          <S.ExperienceContentLeft>
            <S.ContainetExperience>
              <S.DateExperience>08/2020 - 02/2021</S.DateExperience>
              <S.TitleExperience>Estagiário</S.TitleExperience>
              <S.LocalExperience>Agência Atuo</S.LocalExperience>
            </S.ContainetExperience>

            <S.ContainetExperience>
              <S.DateExperience>01/2022 - Atual</S.DateExperience>
              <S.TitleExperience>Front-End Jr.</S.TitleExperience>
              <S.LocalExperience>EvolutionSoft</S.LocalExperience>
            </S.ContainetExperience>
          </S.ExperienceContentLeft>

          <S.LineContainer>
            <S.Line></S.Line>
          </S.LineContainer>

          <S.ExperienceContentRight>
            <S.ContainetExperience>
              <S.DateExperience>04/2021 - 11/2021</S.DateExperience>
              <S.TitleExperience>Front-End Jr.</S.TitleExperience>
              <S.LocalExperience>Versátil Now</S.LocalExperience>
            </S.ContainetExperience>
          </S.ExperienceContentRight>
        </S.ExperiencesContainer>
      </S.Content>
    </S.Container>
  )
}

export default Experiences
