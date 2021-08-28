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
export const ExperiencesContainer = styled.div`
  padding-top: 50px;

  display: flex;
  justify-content: center;
`

export const ExperienceContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  padding-top: 120px;
  text-align: end;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`

export const ExperienceContentRight = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 270px;

  @media screen and (max-width: 768px) {
    padding-top: 200px;
  }
`

export const DateExperience = styled.div`
  color: #9542f5;
  font-size: 30px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
`

export const TitleExperience = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 25px;
  font-weight: 700;
  padding-top: 12px;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
`
export const LocalExperience = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 25px;
  font-weight: 700;
  padding-top: 5px;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
`

export const LineContainer = styled.div`
  height: 510px;
  display: flex;
  justify-content: center;
`

export const Line = styled.span`
  border-left: 6px solid #9542f5;
  border-radius: 5px;
`
