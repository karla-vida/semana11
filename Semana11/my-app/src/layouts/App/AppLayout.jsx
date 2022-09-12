import { ThemeProvider } from 'styled-components';
import {PerfilProvider, useCustomTheme} from '../../context';
import { NavBar} from '../../components';
import { GlobalStyle } from "../../themes";
import { ProfilePages } from '../../pages';

export const AppLayout = ()=> {
    const {theme} = useCustomTheme();
    return (<ThemeProvider theme={theme}>
         <GlobalStyle/> 
        <NavBar/>
        <PerfilProvider>
        <ProfilePages/>
        </PerfilProvider>
        </ThemeProvider>);
}