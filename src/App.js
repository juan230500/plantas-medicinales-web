import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./containers/LandingPage";
import InfoPage from "./containers/InfoPage";
import ContactPage from "./containers/ContactPage";
import NavBar from "./components/UI/NavBar";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect } from "react";
import TeaPage from "./containers/TeaPage";

const App = (props) => {
  useEffect(() => {
    ReactGA.initialize("UA-191439531-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log("AAAAAAAAAAA");
    console.log(window.location.pathname + window.location.search);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          {/* <Route path="/about">
            <InfoPage />
          </Route> */}
          <Route path="/tea">
            <TeaPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/store" exact>
            <LandingPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
