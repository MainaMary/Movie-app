import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components';
import {DarkTheme, LightTheme, GlobalStyles} from "./Theme"
import { FaBeer,FcHeadset } from 'react-icons/fa';
import { IconContext } from "react-icons";


function Toggle({children}) {
    const [lightTheme, setTheme] = useState(true)

const theme = lightTheme ? LightTheme : DarkTheme

    const handleToggle = () =>{
        setTheme(prevMode => !prevMode)
    }
    return (
       <ThemeProvider theme ={theme}>
           <GlobalStyles/>
           {children}
           <IconContext.Provider value={{fontSize:"90px"}}>
               <div >
               <FaBeer onClick={handleToggle}/>
               </div>
        
           </IconContext.Provider>
           
       </ThemeProvider>
           
    
    )
}

export default Toggle
