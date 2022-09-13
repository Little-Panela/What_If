import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt_br">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#121214" />
        <meta name="color-scheme" content="dark" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
