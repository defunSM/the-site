import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/index.scss'

// Setting up Chakara UI https://chakra-ui.com/guides/getting-started/nextjs-guide
// TODO: Create a custom theme by extrending the theme provided by chakara ui

function MyApp({ Component, pageProps }: AppProps) {
  return (

            <Component {...pageProps} />

        )
}

export default MyApp
