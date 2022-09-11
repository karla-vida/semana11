import { ThemeProvider } from 'styled-components';
import PropTypes from "prop-types";
import {useCustomTheme} from '../../context';

export const AppLayout = (children)=> {
    const {theme} = useCustomTheme();
    return <ThemeProvider>{children}</ThemeProvider>
}

AppLayout.PropTypes = {
    children: PropTypes.node,
};