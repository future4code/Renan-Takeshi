import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreateTripPage from "../CreateTripPage";
import HomePage from "../HomePage";
import ListTripsPage from "../ListTripsPage";
import LoginPage from "../LoginPage";
import TripDetailsPage from "../TripDetailsPage";
import ApplicationForm from "../ApplicationForm";
import FourOFour from "../FourOFour";
import DocumentTitle from "react-document-title";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DocumentTitle title="LabeX - Home" />
          <HomePage />
        </Route>
        <Route exact path="/login">
          <DocumentTitle title="LabeX - Login" />
          <LoginPage />
        </Route>
        <Route exact path="/trips/list">
          <DocumentTitle title="LabeX - Trips" />
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/application-form/:tripId">
          <DocumentTitle title="LabeX - Application Form" />
          <ApplicationForm />
        </Route>
        <Route exact path="/trips/details/:tripId">
          <DocumentTitle title="LabeX - Trip Details" />
          <TripDetailsPage />
        </Route>
        <Route exact path="/trips/create">
          <DocumentTitle title="LabeX - Create Trip" />
          <CreateTripPage />
        </Route>
        <Route path="/">
          <DocumentTitle title="LabeX - ¯\_(ツ)_/¯" />
          <FourOFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
