import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Matheus Krapf</title>
        <link rel="shortcut icon" href="/img/icon-site.png" />
        <link rel="apple-touch-icon" href="/img/icon-site.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap"
          rel="stylesheet"
        /> */}
        <meta name="description" content="a simple boilerplate next js" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
