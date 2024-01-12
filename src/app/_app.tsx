// pages/_app.tsx
import { Provider as JotaiProvider } from 'jotai'
import type { Session } from 'next-auth'
import type { AppProps } from 'next/app'

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session | null }>) {
  return (
    <JotaiProvider>
      <Component {...pageProps} />
    </JotaiProvider>
  )
}

export default MyApp
