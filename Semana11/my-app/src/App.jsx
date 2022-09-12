import { CustomThemeProvider } from "./context/"
import { AppLayout } from "./layouts/App/AppLayout"
import { GlobalStyle } from "./themes"

function App() {

  return (
    <CustomThemeProvider>  
      <AppLayout>
      <GlobalStyle/> 
       <p>Olá</p>
       </AppLayout>
    </CustomThemeProvider>  
  )
}

export default App