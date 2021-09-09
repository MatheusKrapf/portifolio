import React, { useState, useEffect, useCallback } from 'react'

import Loading from 'components/Loading'

import Error from 'components/Error'

export default function Custom404() {
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

  useEffect(() => {
    resolveLoading()
  }, [resolveLoading])

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  return (
    <>
      <Error />
    </>
  )
}
