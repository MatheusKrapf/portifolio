import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Link } from 'react-scroll'

import * as S from './styles'

interface Props {
  toggleTheme(): void
}

const HeroBanner: React.FC<Props> = ({ toggleTheme }) => {
  const { color, title } = useContext(ThemeContext)

  return (
    <S.Container>
      <S.HeaderContent>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={color.primary}
          onColor={color.secundary}
          offHandleColor={color.primary}
          onHandleColor={color.secundary}
        />
      </S.HeaderContent>

      <S.Content>
        <S.Presentation>
          <S.Im>Eu sou</S.Im>
          <S.GlitchContent>
            <S.Glitch data-text="Krapf">Krapf</S.Glitch>
          </S.GlitchContent>
          <S.TextCarrer>Front-end Jr.</S.TextCarrer>
        </S.Presentation>

        <S.ScrollDownAnimation>
          <Link to="Skills" smooth={true} duration={1000}>
            <S.Mouse>
              <S.Move></S.Move>
            </S.Mouse>
            <S.TextScroll>Scroll</S.TextScroll>
          </Link>
        </S.ScrollDownAnimation>
      </S.Content>
    </S.Container>
  )
}

export default HeroBanner
