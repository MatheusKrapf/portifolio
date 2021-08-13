import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  /* height: 100vh; */
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
  /* font-size: 50px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  color: #fff; */

  font-size: 50px;
  line-height: 1;
  font-weight: 700;
  position: absolute;
  top: 50px;
  left: 13%;
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
    content: 'Skills';
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

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 70px;
  padding-bottom: 150px;
`

export const Skills = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
  width: 800px;
`

export const Skill = styled.div`
  img {
    width: 150px;
    /* cursor: pointer; */

    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    /* filter: gray;  */

    &:hover {
      -webkit-filter: grayscale(0%);
      transition: 0.5s;
    }
  }
`

export const NameSkill = styled.main`
  padding-top: 20px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
`
