import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";


const CreateTripPage = () => {
  useProtectedPage();
  const history = useHistory();
  return (
    <div>
      <input placeholder="Name" />
      <input placeholder="Name" />
      <button onClick={() => history.push("/trips/list")}>Back to list</button>
      <button onClick={() => history.push("/")}>Go to Home</button>
    </div>
  );
};

export default CreateTripPage;
