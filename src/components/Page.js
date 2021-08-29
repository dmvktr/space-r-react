import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { MainContainer } from "./layout/PageElements";
import About from "./About";
import AllNews from "./AllNews";
import Astronauts from "./Astronauts";
import Locations from "./Locations";
import Gallery from "./Gallery";
import Events from "./Events";
import Home from "./Home";
import Spacecrafts from "./Spacecrafts";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, alien, GlobalStyles } from "./context/Theme.js";

const Page = (props) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : currentTheme === "dark"? darkTheme : alien}>
      <GlobalStyles />
      <Router>
        <MainContainer>
          <NavBar theme={currentTheme} setTheme={setCurrentTheme} />
          <Switch>
            <Route
              path="/"
              render={(props) => <Home {...props} theme={currentTheme} />}
              exact
            />
            <Route
              path="/news"
              render={(props) => <AllNews {...props} theme={currentTheme} />}
              exact
            />
            <Route
              path="/spacecrafts"
              render={(props) => (
                <Spacecrafts {...props} theme={currentTheme} />
              )}
              exact
            />

            <Route
              path="/astronauts"
              render={(props) => <Astronauts {...props} theme={currentTheme} />}
              exact
            />

            <Route
              path="/events"
              render={(props) => <Events {...props} theme={currentTheme} />}
              exact
            />

            <Route
              path="/locations"
              render={(props) => <Locations {...props} theme={currentTheme} />}
              exact
            />

            <Route
              path="/gallery"
              render={(props) => <Gallery {...props} theme={currentTheme} />}
              exact
            />
          </Switch>
          <About />
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
};

export default Page;
