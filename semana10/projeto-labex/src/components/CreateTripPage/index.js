import React from "react";
import useProtectedPage from '../hooks/useProtectedPage'

const CreateTripPage = () => {
  useProtectedPage()
  return (
    <div>
Create
    </div>
  );
};

export default CreateTripPage;
