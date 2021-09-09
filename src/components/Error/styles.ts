﻿import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  overflow: hidden;
  /* background: #0b0c10; */
  background: #0b0c10;

  position: relative;
`

export const Content = styled.div`
  padding-left: 83px;
  padding-right: 83px;

  z-index: 20;
  position: relative;

  padding-top: 70px;

  @media screen and (max-width: 768px) {
    padding-left: 42px;
    padding-right: 42px;
  }
`

export const GlitchContent = styled.div`
  position: relative;
  /* height: 100%;
  width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Glitch = styled.div`
  color: #fff;
  /* color: ${(props) => props.theme.color.text}; */
  font-weight: 700;
  font-size: 70px;
  text-transform: uppercase;
  transform: scale(2);
  letter-spacing: 2px;
  padding: 30px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
    padding: 30px;
  }

  &:after,
  &:before {
    position: absolute;
    content: attr(data-text);
    padding: 30px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #0b0c10;
    /* background: ${(props) => props.theme.color.background}; */
    color: #fff;
    /* color: ${(props) => props.theme.color.text}; */
    overflow: hidden;

    @media screen and (max-width: 768px) {
      padding: 30px;
    }
  }

  &:before {
    left: 3px;
    text-shadow: -5px 0 red;
    animation: glitch-1 2s 0s linear reverse infinite;
  }

  &:after {
    left: -3px;
    text-shadow: -5px 0 blue;
    animation: glitch-2 2s 0s linear reverse infinite;
  }

  @keyframes glitch-1 {
    0% {
      clip: rect(132px, auto, 101px, 30px);
    }
    5% {
      clip: rect(17px, auto, 94px, 30px);
    }
    10% {
      clip: rect(40px, auto, 66px, 30px);
    }
    15% {
      clip: rect(87px, auto, 82px, 30px);
    }
    20% {
      clip: rect(137px, auto, 61px, 30px);
    }
    25% {
      clip: rect(34px, auto, 14px, 30px);
    }
    30% {
      clip: rect(133px, auto, 74px, 30px);
    }
    35% {
      clip: rect(76px, auto, 107px, 30px);
    }
    40% {
      clip: rect(59px, auto, 130px, 30px);
    }
    45% {
      clip: rect(29px, auto, 84px, 30px);
    }
    50% {
      clip: rect(22px, auto, 67px, 30px);
    }
    55% {
      clip: rect(67px, auto, 62px, 30px);
    }
    60% {
      clip: rect(10px, auto, 105px, 30px);
    }
    65% {
      clip: rect(78px, auto, 115px, 30px);
    }
    70% {
      clip: rect(105px, auto, 13px, 30px);
    }
    75% {
      clip: rect(15px, auto, 75px, 30px);
    }
    80% {
      clip: rect(66px, auto, 39px, 30px);
    }
    85% {
      clip: rect(133px, auto, 73px, 30px);
    }
    90% {
      clip: rect(36px, auto, 128px, 30px);
    }
    95% {
      clip: rect(68px, auto, 103px, 30px);
    }
    100% {
      clip: rect(14px, auto, 100px, 30px);
    }
  }
  @keyframes glitch-2 {
    0% {
      clip: rect(129px, auto, 36px, 30px);
    }
    5% {
      clip: rect(36px, auto, 4px, 30px);
    }
    10% {
      clip: rect(85px, auto, 66px, 30px);
    }
    15% {
      clip: rect(91px, auto, 91px, 30px);
    }
    20% {
      clip: rect(148px, auto, 138px, 30px);
    }
    25% {
      clip: rect(38px, auto, 122px, 30px);
    }
    30% {
      clip: rect(69px, auto, 54px, 30px);
    }
    35% {
      clip: rect(98px, auto, 71px, 30px);
    }
    40% {
      clip: rect(146px, auto, 34px, 30px);
    }
    45% {
      clip: rect(134px, auto, 43px, 30px);
    }
    50% {
      clip: rect(102px, auto, 80px, 30px);
    }
    55% {
      clip: rect(119px, auto, 44px, 30px);
    }
    60% {
      clip: rect(106px, auto, 99px, 30px);
    }
    65% {
      clip: rect(141px, auto, 74px, 30px);
    }
    70% {
      clip: rect(20px, auto, 78px, 30px);
    }
    75% {
      clip: rect(133px, auto, 79px, 30px);
    }
    80% {
      clip: rect(78px, auto, 52px, 30px);
    }
    85% {
      clip: rect(35px, auto, 39px, 30px);
    }
    90% {
      clip: rect(67px, auto, 70px, 30px);
    }
    95% {
      clip: rect(71px, auto, 103px, 30px);
    }
    100% {
      clip: rect(83px, auto, 40px, 30px);
    }
  }
`

export const EvaImage = styled.div`
  /* width: 450px; */
  /* height: 100%; */
  position: absolute;
  right: 0;
  bottom: 0;

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    right: -55%;

    img {
      width: 1200px;
    }
  }
`

export const Text = styled.div`
  color: #fff;
`
