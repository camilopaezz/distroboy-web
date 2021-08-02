import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

const extendedTheme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  }
})

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <ColorModeScript initialColorMode='dark' />
      <Navbar />
      <Component {...pageProps} />
      <style jsx>
        {`
          body {
            background-color: #1A202C;
          }
        `}
      </style>
    </ChakraProvider>
  )
}

export default MyApp
