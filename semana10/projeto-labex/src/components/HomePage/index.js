import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const handleClickLogin = () => {
    const isLoggedIn = Boolean(localStorage.getItem("token"));
    isLoggedIn ? history.push("/trips/list") : history.push("/login");
  };
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleClickLogin}>Access as Administrator</button>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/trips/list");
        }}
      >
        Access as Candidate (Logout)
      </button>
    </div>
  );
};

export default HomePage;
