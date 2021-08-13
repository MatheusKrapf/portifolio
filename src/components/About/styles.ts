import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  padding-right: 82px;
  padding-left: 82px;
  /* background: #0b0c10; */
  background: ${(props) => props.theme.color.background};
  /* color: #fff; */
  color: ${(props) => props.theme.color.text};

  position: relative;
`

export const Content = styled.div`
  padding-top: 50px;
`

export const Title = styled.div`
  font-size: 50px;
  line-height: 1;
  font-weight: 700;
  position: absolute;
  top: 50px;
  left: 17%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-decoration: none;
  /* color: #fff; */
  color: ${(props) => props.theme.color.text};
  cursor: pointer;
  text-transform: uppercase;

  &:before,
  &:after {
    display: block;
    content: 'Sobre mim';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }

  &:after {
    color: #f0f;
    z-index: -2;
  }

  &:before {
    color: #0ff;
    z-index: -1;
  }

  &:hover:before {
    animation: Title 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }

  &:hover:after {
    animation: Title 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
      infinite;
  }

  @keyframes Title {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-5px, 5px);
    }
    40% {
      transform: translate(-5px, -5px);
    }
    60% {
      transform: translate(5px, 5px);
    }
    80% {
      transform: translate(5px, -5px);
    }
    100% {
      transform: translate(0);
    }
  }
`
export const AboutContainer = styled.div`
  padding-top: 150px;

  display: flex;
  justify-content: space-evenly;
`

export const TextContainer = styled.div`
  width: 550px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.div`
  font-size: 40px;
  font-weight: 700;
`

export const Description = styled.div`
  padding-top: 20px;
  font-size: 14px;
  line-height: 25px;
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
`
