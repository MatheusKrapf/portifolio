// import Main from 'components/Main'
import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import light from 'styles/themes/light'
import dark from 'styles/themes/dark'

import HeroBanner from 'components/HeroBanner'
import Skills from 'components/Skills'
import About from 'components/About'

export default function Home() {
  const [theme, setTheme] = useState(dark)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    console.log('entrou')
    setTheme(isDarkTheme ? dark : light)
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  useEffect(() => {
    const initalTheme = localStorage.getItem('theme')
    setTheme(initalTheme === 'dark' ? dark : light)
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeroBanner toggleTheme={toggleTheme} />
        <Skills />
        <About />
      </ThemeProvider>
    </>
  )
}
