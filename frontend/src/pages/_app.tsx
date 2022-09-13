import Head from 'next/head'
import type { AppProps } from 'next/app'

import { GlobalContext } from '../contexts/GlobalContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Head>
        <title>What If</title>
      </Head>
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default MyApp
