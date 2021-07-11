import "./App.css";

import LandingPage from "./containers/LandingPage";
import InfoPage from "./containers/InfoPage";
import ContactPage from "./containers/ContactPage";
import NavBar from "./components/UI/NavBar";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect } from "react";

const App = (props) => {
  useEffect(() => {
    ReactGA.initialize("UA-191439531-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log("AAAAAAAAAAA");
    console.log(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/about">
            <InfoPage></InfoPage>
          </Route>
          <Route path="/contact">
            <ContactPage></ContactPage>
          </Route>
          <Route path="/store" exact>
            <LandingPage></LandingPage>
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
