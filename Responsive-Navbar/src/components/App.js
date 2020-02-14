import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Navbar/Header";
import theme from "../theme/Theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <h1>customsoftware</h1>}
          />
          <Route
            exact
            path="/mobile"
            component={() => <h1>Mobile Development</h1>}
          />

          <Route
            exact
            path="/website"
            component={() => <h1>website Development</h1>}
          />
          <Route exact path="/services" component={() => <h1>Services</h1>} />
          <Route
            exact
            path="/revolution"
            component={() => <h1>revolution</h1>}
          />
          <Route exact path="/about" component={() => <h1>about</h1>} />
          <Route exact path="/contact" component={() => <h1>contact</h1>} />
          <Route exact path="/estimate" component={() => <h1>estimate</h1>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// Craeting text
/*
 {
   [...new Array(12)]
     .map(
       () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
     )
     .join("\n");
 }
 */
