import '../styles/globals.css'
import { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import * as React from 'react'

import Meta from '../components/meta'
// import ColorSwitcher from '../components/color-switcher'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => {
// const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      {/* <ColorSwitcher /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  )
  // return <Component {...pageProps} />
}

export default App
