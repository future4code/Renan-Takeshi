import React from "react";
import { useHistory } from "react-router-dom";
import * as labex from "../functions/axios";

const HomePage = () => {
  const history = useHistory();
  const trip = {
    name: "Ano novo em oioioioio",
    planet: "Boing",
    date: "31/12/2019",
    description: "Venha passar a virada pertinho do Sol!",
    durationInDays: 7,
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFuOTlsd2hJcUhLZEo2YkNZZ1k3IiwiZW1haWwiOiJyZW5hbkByZW5hbiIsImlhdCI6MTU5Mjk0NjExNH0.fSQK9zK3DRlxRU3KYzY93P0LLB1_HLuvEqHK6qkChZI";
  const body = {
    name: "Astrodev",
    age: 20,
    applicationText: "Quero muuuuuuito ir!!!",
    profession: "Chefe",
    country: "Brasil",
  };

  return (
    <div>
      Home
      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          history.push("/trips/list");
        }}
      >
        TripsList
      </button>
    </div>
  );
};

export default HomePage;
