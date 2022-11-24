import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ChakraProvider } from '@chakra-ui/react'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

function MyApp({ Component, pageProps }) {
    return (
      <SafeHydrate>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SafeHydrate>
      
    )
  }
  
  export default MyApp