import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  return (
    <div>
      <h2>Home</h2>
      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          localStorage.removeItem('token')
          history.push("/trips/list");
        }}
      >
        TripsList
      </button>
      <button onClick={()=>{localStorage.removeItem('token')}}>Logout</button>
    </div>
  );
};

export default HomePage;
