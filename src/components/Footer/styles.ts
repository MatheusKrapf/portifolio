import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  /* height: 100vh; */

  overflow: hidden;
  background: ${(props) => props.theme.color.background};

  position: relative;
  padding-left: 83px;
  padding-right: 83px;
`

export const Content = styled.div`
  padding-bottom: 10px;
`
export const Credits = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.color.text};
  text-transform: uppercase;
  text-align: center;
  /* font-weight: 700; */
  span {
    color: red;
    font-size: 18px;
  }
`
