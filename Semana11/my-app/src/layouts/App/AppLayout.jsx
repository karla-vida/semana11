import { ThemeProvider } from 'styled-components';
import {PerfilProvider, useCustomTheme} from '../../context';
import { NavBar, Profile} from '../../components';
import { GlobalStyle } from "../../themes";

export const AppLayout = ()=> {
    const {theme} = useCustomTheme();
    return (<ThemeProvider theme={theme}>
         <GlobalStyle/> 
        <NavBar/>
        <PerfilProvider>
        <Profile/>
        </PerfilProvider>
        </ThemeProvider>);
}