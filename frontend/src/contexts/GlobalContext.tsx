import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme/default'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { GlobalStyle } from '../styles/global'

export function GlobalContext({ children }: any) {
  const googleId = process.env.NEXT_PUBLIC_OAUTH_GOOGLE_ID as string

  return (
    <GoogleOAuthProvider clientId={googleId}>
      <ThemeProvider theme={defaultTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </GoogleOAuthProvider>
  )
}
