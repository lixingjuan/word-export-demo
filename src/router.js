import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReportDetail from './pages/Reportmag/reportDetail'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ReportDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
