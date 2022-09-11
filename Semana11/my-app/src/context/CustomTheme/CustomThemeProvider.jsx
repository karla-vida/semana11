import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getTheme, setTheme } from "../../utils/localStorage";

import {CustomThemeContext} from "./CustomThemeContext";

export const CustomThemeProvider = ({children}) => {
    const [isDark, setDark] = useState (true);


  useEffect(()=>{
        setDark(getTheme());
    },[]);

    const handleTheme = () => {
        setDark((prev) => {
        setTheme(!prev);
        return !prev;
    });

    return < CustomThemeContext.Provider value={{isDark, handleTheme}}>
        {children}
        </CustomThemeContext.Provider>
};


CustomThemeProvider.PropTypes = {
    children: PropTypes.node,
};
}
