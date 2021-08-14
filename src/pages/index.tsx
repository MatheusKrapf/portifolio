// import Main from 'components/Main'
import React, { useState, useEffect, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import Cookies from 'js-cookie'

import light from 'styles/themes/light'
import dark from 'styles/themes/dark'

import HeroBanner from 'components/HeroBanner'
import Skills from 'components/Skills'
import About from 'components/About'
import Loading from 'components/Loading'

export default function Home() {
  const [theme, setTheme] = useState(dark)
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

  const [isDarkTheme, setIsDarkTheme] = useState(
    Cookies.get('theme') === 'dark'
  )

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    setTheme(isDarkTheme ? dark : light)

    Cookies.set('theme', isDarkTheme ? 'dark' : 'light', { expires: 365 })
  }, [isDarkTheme])

  useEffect(() => {
    resolveLoading()
  }, [resolveLoading])

  if (loading) return <Loading />

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
