import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  /* height: 100vh; */

  overflow: hidden;
  /* background: #0b0c10; */
  background: ${(props) => props.theme.color.background};

  position: relative;
`

export const Content = styled.div`
  padding-top: 50px;
  padding-left: 83px;
  padding-right: 83px;

  @media screen and (max-width: 768px) {
    padding-left: 42px;
    padding-right: 42px;
  }
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
export const ContentContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 0;
    align-items: flex-start;
  }
`

export const TextContainer = styled.div`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const NameContainer = styled.div``

export const Name = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 700;

  /* font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase; */
`

export const Text = styled.div`
  color: ${(props) => props.theme.color.text};
  padding-top: 15px;
  font-size: 17px;
  line-height: 27px;
  font-weight: 300;
`

export const TextDev = styled.div`
  color: ${(props) => props.theme.color.text};
  padding-top: 15px;
  font-size: 17px;
  line-height: 27px;
  font-weight: 400;
  text-transform: uppercase;

  span {
    font-size: 22px;
    color: #d10f2f;
  }
`

export const ContactContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
`

export const EmailContainer = styled.div`
  padding-top: 50px;
  display: flex;
  gap: 6px;
`

export const EmailImage = styled.div`
  path {
    fill: ${(props) => props.theme.color.text};
  }
`

export const Email = styled.a`
  color: #9542f5;
  font-weight: 400;
  text-decoration: none;
  font-size: 20px;
`
export const WhatsContainer = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 15px;
`

export const WhastImage = styled.div`
  path {
    fill: ${(props) => props.theme.color.text};
  }
`

export const Number = styled.a`
  color: #9542f5;
  font-weight: 400;
  text-decoration: none;
  font-size: 20px;
`

export const SocialMedias = styled.div`
  padding-top: 35px;

  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
`

export const SocialMediasContainer = styled.div`
  display: flex;
  padding-top: 15px;
  gap: 20px;
`

export const TitleSocial = styled.div`
  color: ${(props) => props.theme.color.text};
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
`

export const GithubContainer = styled.div`
  width: 50px;

  path {
    fill: ${(props) => props.theme.color.text};
  }
`

export const GithubContent = styled.a``

export const Github = styled.div``

export const LinkedinContainer = styled.a`
  width: 50px;

  path {
    fill: ${(props) => props.theme.color.text};
  }
`
export const LinkedinContent = styled.a``

export const AnimationContainer = styled.div`
  display: flex;
`

export const AnimationContent = styled.div``

export const Credits = styled.div`
  color: ${(props) => props.theme.color.text};
`
