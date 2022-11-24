import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
    return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  }
  
  export default MyApp