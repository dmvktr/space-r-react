import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import {MainContainer} from "./layout/PageElements";
import About from "./About";
import AllNews from "./news/AllNews";
import Astronauts from "./astronauts/Astronauts";
import Locations from "./locations/Locations";
import Gallery from "./gallery/Gallery";
import Events from "./events/Events";
import Home from "./Home";
import Spacecrafts from "./spacecrafts/Spacecrafts";
import {ThemeProvider} from "styled-components";
import {alien, darkTheme, GlobalStyles, lightTheme} from "./context/Theme.js";

const Page = (props) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
      <ThemeProvider theme={currentTheme === "light" ? lightTheme : currentTheme === "dark" ? darkTheme : alien}>
        <GlobalStyles/>
        <Router>
          <MainContainer data-testid="main-container">
            <NavBar theme={currentTheme} setTheme={setCurrentTheme}/>
            <Switch>
              <Route
                  path="/"
                  render={(props) => <Home {...props} theme={currentTheme}/>}
                  exact
              />
              <Route
                  path="/news"
                  render={(props) => <AllNews {...props} theme={currentTheme}/>}
                  exact
              />
              <Route
                  path="/spacecrafts"
                  render={(props) => (
                      <Spacecrafts {...props} theme={currentTheme}/>
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
