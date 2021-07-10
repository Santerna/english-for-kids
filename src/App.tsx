/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./components/pages/mainPage";
import ActionA from "./components/pages/actionAPage";
import ActionB from "./components/pages/actionBPage";
import StatisticsPage from "./components/pages/statisticsPage";
import AnimalsA from "./components/pages/animalsAPage";
import AnimalsB from "./components/pages/animalsBPage";
import Clothes from "./components/pages/clothes";
import Emotions from "./components/pages/emotionsPage";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/actionA">
          <ActionA />
        </Route>
        <Route path="/actionB">
          <ActionB />
        </Route>
        <Route path="/animalsA">
          <AnimalsA />
        </Route>
        <Route path="/animalsB">
          <AnimalsB />
        </Route>
        <Route path="/clothes">
          <Clothes />
        </Route>
        <Route path="/emotions">
          <Emotions />
        </Route>
        <Route path="/statistics">
          <StatisticsPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
