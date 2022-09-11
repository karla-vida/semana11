import { useContext } from "react"
import { CustomThemeContext } from "./CustomThemeContext"

export const UseThemeContext = ()=> {
    const context = useContext(CustomThemeContext);
    
    return context;
}