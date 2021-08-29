import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;

  padding-right: 82px;
  padding-left: 82px;
  /* background: #0b0c10; */
  background: ${(props) => props.theme.color.background};
  /* color: #fff; */
  color: ${(props) => props.theme.color.text};

  position: relative;

  @media screen and (max-width: 768px) {
    padding-left: 42px;
    padding-right: 42px;
  }
`

export const Content = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
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
export const AboutContainer = styled.div`
  padding-top: 50px;

  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    padding-top: 70px;
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  width: 550px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 35px;
  }
`

export const Name = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #9542f5;
`

export const Description = styled.div`
  padding-top: 20px;
  font-size: 17px;
  line-height: 29px;
  font-weight: 300;
`
export const PhotoContainer = styled.div`
  img {
    width: 250px;
    border-radius: 100%;
    position: relative;

    box-shadow: 0px 0px 13px 3px ${(props) => props.theme.color.text};

    background: ${(props) => props.theme.color.text};
    border-radius: 100%;
    display: inline-block;
    font-size: 20px;
    padding: 0;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
