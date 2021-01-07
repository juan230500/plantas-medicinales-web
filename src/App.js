import "./App.css";
import styled from "styled-components";
import { LAYOUT } from "./Constants";
import intro from "./assets/videos/intro.mp4";
import flowers from "./assets/images/flowers.jpeg";

import LandingPage from "./containers/LandingPage";
import InfoPage from "./containers/InfoPage";
import ContactPage from "./containers/ContactPage";
import NavBar from "./components/UI/NavBar";
import { Route, BrowserRouter } from "react-router-dom";

const Video = styled.video`
  width: 50%;
  border-radius: ${LAYOUT.borderRadius};
`;

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Route path="/" exact>
          <LandingPage></LandingPage>
        </Route>
        <Route path="/about">
          <InfoPage></InfoPage>
        </Route>
        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
