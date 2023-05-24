import { useContext } from "react"
import ThemeContext from "../context/State"

const ThemeToggler = ()=>{
    const [themeMode,setThemeMode] = useContext(ThemeContext)

    return(
        <div onClick={()=>{setThemeMode(themeMode==="light" ? "dark" :"light")}}>
            <span>{themeMode === "light" ?"Dark" : "Light"}</span>
        </div>
    )

}


export default ThemeToggler