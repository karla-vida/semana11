import { CustomThemeProvider } from "./context/CustomTheme"

function App() {

  return (
    <CustomThemeProvider>
       <p>Olá</p>
    </CustomThemeProvider>
  )
}

export default App