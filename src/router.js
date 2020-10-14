import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReportDetail from "./pages/Reportmag/reportDetail";
import Demo from "./pages/Demo";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ReportDetail} />
        <Route exact path="/demo" component={Demo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
