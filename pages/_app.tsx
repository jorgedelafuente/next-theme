import type { AppProps } from 'next/app';
import "./../styles/globals.css"

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Component {...pageProps} />
  )
}

export default App;
