import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { MainContainer } from "./layout/PageElements";
import About from "./About";
import AllNews from "./AllNews";
import Astronauts from "./Astronauts";
import Locations from "./Locations";
import Gallery from "./Gallery";
import Home from "./Home";
import Spacecrafts from "./Spacecrafts";
import { LocationDetails } from "./LocationDetails";

function Page() {
  return (
    <Router>
      <MainContainer>
        <NavBar />
        <Switch>
          <Route
            path="/"
            render={(props) => <Home {...props} theme={"dark"} />}
            exact
          />
          <Route
            path="/news"
            render={(props) => <AllNews {...props} theme={"dark"} />}
            exact
          />
          <Route
            path="/spacecrafts"
            render={(props) => <Spacecrafts {...props} theme={"dark"} />}
            exact
          />

            <Route
            path="/astronauts"
            render={(props) => <Astronauts {...props} theme={"dark"} />}
            exact
          />

          <Route
            path="/locations"
            render={(props) => <Locations {...props} theme={"dark"} />}
            exact
          />

          <Route
            path="/locations/location/:id"
            render={(props) => <LocationDetails {...props} theme={"dark"} />}
            exact
          />

          <Route
            path="/gallery"
            render={(props) => <Gallery {...props} theme={"dark"} />}
            exact
          />
        </Switch>
        <About />
      </MainContainer>
    </Router>
  );
}

export default Page;
