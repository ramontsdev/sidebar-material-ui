import { DrawerProvider } from '../contexts/drawer-context'
import { AppThemeProvider } from '../contexts/theme-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <Component {...pageProps} />
      </DrawerProvider>
    </AppThemeProvider>
  )
}

export default MyApp
