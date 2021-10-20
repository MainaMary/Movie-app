import {createGlobalStyle} from "styled-components"

export const LightTheme = {
    backgroundColor: "#fff",
    fontColor: "#000"
    }
export const DarkTheme = {
    backgroundColor: "#000",
    fontColor: "#fff"
}

export const GlobalStyles = createGlobalStyle`
body {
    background: ${props=> props.theme.backgroundColor};
    color: ${props => props.theme.fontColor};
}
`

