import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  /* height: 100%; */
  padding-left: 83px;
  padding-right: 83px;
  overflow: hidden;
  /* background: #0b0c10; */
  background: ${(props) => props.theme.color.background};

  position: relative;

  @media screen and (max-width: 768px) {
    padding-left: 42px;
    padding-right: 42px;
  }
`

export const Content = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`

export const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  position: relative;
  color: ${(props) => props.theme.color.text};
  text-transform: uppercase;

  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

  animation: glitch 500ms infinite;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @keyframes glitch {
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
  }
`
export const Description = styled.div`
  padding-top: 22px;
  color: ${(props) => props.theme.color.text};
  font-size: 22px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`
export const SitesContainer = styled.div`
  padding-top: 70px;

  display: flex;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const SiteContainer = styled.div`
  width: 360px;

  @media screen and (max-width: 768px) {
    width: 99%;
  }
`

export const Teste = styled.div`
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.21);
`

export const Bar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 24px;
  background-color: #ddd;
  width: 100%;
  color: #6a6a6a;
  z-index: 10;
  /* width: 50%; */
`

export const BallsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 7px;
  gap: 5px;
`

export const BallContainer = styled.div`
  display: flex;
`

export const BallRed = styled.span`
  height: 12px;
  width: 12px;
  display: inline-block;
  background-color: #ff5f57;
  border-radius: 50%;
  /* position: absolute; */
  top: 6px;
  left: 10px;
  padding-left: 5px;
`

export const BallYellow = styled.span`
  height: 12px;
  width: 12px;
  display: inline-block;
  background-color: #ff5f57;
  border-radius: 50%;
  left: 16px;
  background-color: #ffbd2e;
  top: 0;
`

export const BallGreen = styled.span`
  height: 12px;
  width: 12px;
  display: inline-block;
  background-color: #ff5f57;
  border-radius: 50%;
  left: 32px;
  background-color: #28ca41;
  top: 0;
`

export const TitleBar = styled.div`
  text-align: center;
  flex-basis: calc(100% - 80px);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  color: #8a8a8a;
`

export const CardSites = styled.div``

export const ImageContainer = styled.div`
  width: 360px;
  height: 176px;
  display: inline-block;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    /* width: 50%; */
    width: 100%;
    height: 176px;

    object-fit: cover;

    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 22px;
  /* width: 50%; */
`

export const TitleSite = styled.div`
  color: #9542f5;
  font-size: 22px;
  font-weight: 700;
`

export const DescriptionContainer = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;
  padding-top: 6px;

  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
    font-size: 17px;
    line-height: 26px;
  }
`
