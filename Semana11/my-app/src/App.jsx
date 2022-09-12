import { CustomThemeProvider } from "./context/"
import { AppLayout } from "./layouts/App/AppLayout"


function App() {

  return (
    <CustomThemeProvider>  
      <AppLayout>
    
       <p>Olá</p>
       </AppLayout>
    </CustomThemeProvider>  
  )
}

export default App