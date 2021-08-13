import React from 'react'

import * as S from './styles'

const htmlImage = '/img/skills/html5-plain.svg'
const cssImage = '/img/skills/css3-plain.svg'
const jsImage = '/img/skills/javascript-plain.svg'
const reactImage = '/img/skills/react-original.svg'
const sassImage = '/img/skills/sass-original.svg'
const typescriptImage = '/img/skills/typescript-plain.svg'
const yarnImage = '/img/skills/yarn-original.svg'
const gitImage = '/img/skills/git-plain.svg'

const Skills = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Skills</S.Title>

        <S.SkillsContainer>
          <S.Skills>
            <S.Skill>
              <img src={htmlImage} alt="" />
              <S.NameSkill>HTML5</S.NameSkill>
            </S.Skill>

            <S.Skill>
              <img src={cssImage} alt="" />
              <S.NameSkill>CSS3</S.NameSkill>
            </S.Skill>

            <S.Skill>
              <img src={jsImage} alt="" />
              <S.NameSkill>JavaScript</S.NameSkill>
            </S.Skill>

            <S.Skill>
              <img src={reactImage} alt="" />
              <S.NameSkill>React.Js</S.NameSkill>
            </S.Skill>

            <S.Skill>
              <img src={sassImage} alt="" />
              <S.NameSkill>Sass</S.NameSkill>
            </S.Skill>

            <S.Skill>
              <img src={typescriptImage} alt="" />
              <S.NameSkill>TypeScript</S.NameSkill>
            </S.Skill>

            <S.Skill>
              <img src={yarnImage} alt="" />
              <S.NameSkill>Yarn</S.NameSkill>
            </S.Skill>

            <S.Skill>
              <img src={gitImage} alt="" />
              <S.NameSkill>Git</S.NameSkill>
            </S.Skill>
          </S.Skills>
        </S.SkillsContainer>
      </S.Content>
    </S.Container>
  )
}

export default Skills
