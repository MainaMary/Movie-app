import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles } from "./Theme";
import { BsBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";

import { IconContext } from "react-icons";

function Toggle({ children }) {
  const [lightTheme, setTheme] = useState(!true);

  const theme = lightTheme ? LightTheme : DarkTheme;

  const handleToggle = () => {
    setTheme((prevMode) => !prevMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
      <IconContext.Provider value={{ fontSize: "90px" }}>
        <IconWrapper onClick={handleToggle}>
          {lightTheme ? <BsFillMoonFill/> : <BsBrightnessHighFill />}
        </IconWrapper>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default Toggle;
export const IconWrapper = styled.div``;
