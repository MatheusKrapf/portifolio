// import Main from 'components/Main'
import React, { useState, useEffect, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import Cookies from 'js-cookie'

import light from 'styles/themes/light'
import dark from 'styles/themes/dark'

import Loading from 'components/Loading'
import HeroBanner from 'components/HeroBanner'
import Skills from 'components/Skills'
import About from 'components/About'
import Portfolio from 'components/Portfolio'
import Experiences from 'components/Experiences'
import Contact from 'components/Contact'

export default function Home() {
  const cookieTheme = JSON.parse(Cookies.get('theme') || JSON.stringify(dark))
  const [theme, setTheme] = useState(cookieTheme || dark)
  const [loading, setLoading] = useState(true)

  const fakeLoading = new Promise((resolve) => {
    setTimeout(() => {
      setLoading(false)
      resolve(true)
    }, 1000)
  })

  const resolveLoading = useCallback(
    () => async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await fakeLoading()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // const [isDarkTheme, setIsDarkTheme] = useState(
  //   Cookies.get('theme') === ('dark' || '') ? true : false
  // )

  // const toggleTheme = () => {
  //   setIsDarkTheme(!isDarkTheme)
  // }

  // useEffect(() => {
  //   setTheme(isDarkTheme ? dark : light)

  //   Cookies.set('theme', theme, { expires: 365 })
  // }, [isDarkTheme])

  useEffect(() => {
    Cookies.set('theme', JSON.stringify(theme), { expires: 365 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  useEffect(() => {
    resolveLoading()
  }, [resolveLoading])

  if (loading) {
    return (
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeroBanner toggleTheme={toggleTheme} />
        <Skills />
        <About />
        <Portfolio />
        <Experiences />
        <Contact />
      </ThemeProvider>
    </>
  )
}
