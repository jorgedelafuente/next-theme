import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui'

import theme from '../styles/theme'
// import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
