import { CustomThemeProvider } from "./context/CustomTheme"
import { AppLayout } from "./layouts/App/AppLayout"
import { GlobalStyle } from "./themes"

function App() {

  return (
    <CustomThemeProvider>
      <GlobalStyle/>
      <AppLayout>
       <p>Olá</p>
       </AppLayout>
    </CustomThemeProvider>
  )
}

export default App