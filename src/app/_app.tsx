// pages/_app.tsx
import { Provider as JotaiProvider } from 'jotai'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <Component {...pageProps} />
    </JotaiProvider>
  )
}

export default MyApp
