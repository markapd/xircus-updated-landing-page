import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import {NextIntlProvider} from 'next-intl';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  )
}

export default MyApp
