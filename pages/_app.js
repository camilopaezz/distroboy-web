import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode='dark' />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
