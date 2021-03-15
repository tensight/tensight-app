import '../styles/index.css'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <SWRConfig
        value={{
          refreshInterval: 10000,
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  )
}

export default MyApp
