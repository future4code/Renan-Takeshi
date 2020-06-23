import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import ListTripsPage from "../ListTripsPage";
import LoginPage from "../LoginPage";
import TripDetailsPage from "../TripDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/trips">
          <ListTripsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
