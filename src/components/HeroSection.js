import { useContext } from "react";

import ThemeContext from "../context/State";

import AppTheme from "../Color"

const HeroSection =()=>{
    const theme = useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]

    return(
        <div
        style={{
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:"center"
        }}
        >
            <h1>context Api</h1>
            <p>This a nice paragraph</p>
            <button style={{backgroundColor:"blue"}}>Click Me</button>
        </div>
    )
}


export default HeroSection