import React from "react";
import FooterComponent from "./FooterComponent";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <Header /> */}
        <FooterComponent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
