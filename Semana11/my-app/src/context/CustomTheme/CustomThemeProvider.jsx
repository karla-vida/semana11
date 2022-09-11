
import PropTypes from "prop-types";
import { useState } from "react";

import {CustomThemeContext} from "./CustomThemeContext";

export const CustomThemeProvider = ({children}) => {
    return < CustomThemeContext.Provider>{children}</CustomThemeContext.Provider>

};

