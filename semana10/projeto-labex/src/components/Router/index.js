import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import ListTripsPage from "../ListTripsPage";
import LoginPage from "../LoginPage";
import TripDetailsPage from "../TripDetailsPage";
import ApplicationForm from "../ApplicationForm";
import FourOFour from "../404";

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
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/application-form/:tripId">
          <ApplicationForm />
        </Route>
        <Route exact path="/trips/details/:tripId">
          <TripDetailsPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route path="/">
          <FourOFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
