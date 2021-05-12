import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/home/home";
import VendorList from "./containers/vendor-list/vendor-list";
import NotFound from "./components/not-found";
import React from "react";
import { pageRoutes } from "./constance/route";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path={pageRoutes.vendor_list} component={VendorList} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
