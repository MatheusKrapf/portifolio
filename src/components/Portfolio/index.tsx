import React from 'react'

import * as S from './styles'

const siteTomesorte = '/img/portfolio/siteTomeSorte.png'
const siteRafaela = '/img/portfolio/siteRafaela.png'
const siteNetflix = '/img/portfolio/siteNetflix.png'

const Portfolio = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Portfolio</S.Title>

        <S.Description>
          Alguns exemplos de sites em que trabalhei:
        </S.Description>

        <S.SitesContainer>
          <S.SiteContainer>
            <S.Bar>
              <S.BallsContainer>
                <S.BallContainer>
                  <S.BallRed></S.BallRed>
                </S.BallContainer>

                <S.BallContainer>
                  <S.BallYellow></S.BallYellow>
                </S.BallContainer>

                <S.BallContainer>
                  <S.BallGreen></S.BallGreen>
                </S.BallContainer>
              </S.BallsContainer>

              <S.TitleBar>Tome Sorte</S.TitleBar>
            </S.Bar>
            <S.CardSites>
              <S.ImageContainer>
                <img src={siteTomesorte} alt="" />
              </S.ImageContainer>
              <S.InformationContainer>
                <S.TitleSite>Tome Sorte</S.TitleSite>
                <S.DescriptionContainer>
                  Uma página desenvolvida para apresentar como funciona o App
                  Tome Sorte, foi feito o levantamento de quais tipos ações
                  podem engajar ao cliete.
                </S.DescriptionContainer>
              </S.InformationContainer>
            </S.CardSites>
          </S.SiteContainer>

          <S.SiteContainer>
            <S.Bar>
              <S.BallsContainer>
                <S.BallContainer>
                  <S.BallRed></S.BallRed>
                </S.BallContainer>

                <S.BallContainer>
                  <S.BallYellow></S.BallYellow>
                </S.BallContainer>

                <S.BallContainer>
                  <S.BallGreen></S.BallGreen>
                </S.BallContainer>
              </S.BallsContainer>

              <S.TitleBar>Rafaela Medeiros</S.TitleBar>
            </S.Bar>
            <S.CardSites>
              <S.ImageContainer>
                <img src={siteRafaela} alt="" />
              </S.ImageContainer>
              <S.InformationContainer>
                <S.TitleSite>Rafaela Medeiros</S.TitleSite>
                <S.DescriptionContainer>
                  Um portfólio desenvolvido para mostrar os principais projetos
                  dessa engenheira cheia de criatividade.
                </S.DescriptionContainer>
              </S.InformationContainer>
            </S.CardSites>
          </S.SiteContainer>

          <S.SiteContainer>
            <S.Bar>
              <S.BallsContainer>
                <S.BallContainer>
                  <S.BallRed></S.BallRed>
                </S.BallContainer>

                <S.BallContainer>
                  <S.BallYellow></S.BallYellow>
                </S.BallContainer>

                <S.BallContainer>
                  <S.BallGreen></S.BallGreen>
                </S.BallContainer>
              </S.BallsContainer>

              <S.TitleBar>Netflix Clone</S.TitleBar>
            </S.Bar>
            <S.CardSites>
              <S.ImageContainer>
                <img src={siteNetflix} alt="" />
              </S.ImageContainer>
              <S.InformationContainer>
                <S.TitleSite>Netflix Clone</S.TitleSite>
                <S.DescriptionContainer>
                  Uma página feita para ser um clone da página de seleção de
                  filmes do site Netflix, foi feito como maneira de treinamento
                  e está disponivel no meu Github.
                </S.DescriptionContainer>
              </S.InformationContainer>
            </S.CardSites>
          </S.SiteContainer>
        </S.SitesContainer>
      </S.Content>
    </S.Container>
  )
}

export default Portfolio
