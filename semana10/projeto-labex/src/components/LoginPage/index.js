import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  return (
    <div>
      Login
      <button
        onClick={() => {
          history.push("/trips/list");
        }}
      >
        Go to list
      </button>
    </div>
  );
};

export default LoginPage;
