/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-cycle */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/pages/mainPage";
import ActionA from "./components/pages/actionAPage";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/layout/layout";
import StatisticsPage from "./components/pages/statisticsPage";
import ActionB from "./components/pages/actionBPage";
import AnimalsA from "./components/pages/animalsAPage";

function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          // Layout and sidebar can now receive props
          <Layout {...props}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/actionA" component={ActionA} />
              <Route path="/actionB" component={ActionB} />
              <Route path="/animalsA" component={AnimalsA} />
              <Route path="/statistics" component={StatisticsPage} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;
