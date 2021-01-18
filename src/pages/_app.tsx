import { AppProps } from 'next/app'
import Head from 'next/head'
import './../styles/vendors/index.scss'
import './../styles/base/index.scss'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Next.js TypeScript Quickstart</title>
      </Head>
      <div className="page">
        <Component {...pageProps} />
      </div>
    </>
  )
}
