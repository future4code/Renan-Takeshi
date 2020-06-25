import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";

const CreateTripPage = () => {
  useProtectedPage();
  return (
    <div>
      <input placeholder="Name" />
      <input placeholder="Name" />
    </div>
  );
};

export default CreateTripPage;
