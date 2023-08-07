'use client'

import { ChakraProvider } from '@chakra-ui/next-js'
import { extendTheme } from '@chakra-ui/next-js'

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  
export const theme = extendTheme({ colors })


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;