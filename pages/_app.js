import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import Head from 'next/head'

const extendedTheme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  }
})

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DistroBoy</title>

        <meta property='og:url' content='http://www.distroboy.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='DistroBoy' />
        <meta property='og:description' content='DistroBoy is the best platform to monetize your music.' />
        <meta property='og:image' content='http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg' />

        <meta name='description' content='DistroBoy is the best platform to monetize your music.' />
        <meta name='keywords' content='Distrokid, music, spotify, apple music, distribution, independent' />
        <meta name='robots' content='index, follow' />
      </Head>
      <ChakraProvider theme={extendedTheme}>
        <ColorModeScript initialColorMode='dark' />
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
