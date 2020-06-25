import React from "react";
import useProtectedPage from '../hooks/useProtectedPage'
import styled from 'styled-components'
import useInput from '../hooks/useInput'

const CreateTripPage = () => {
  useProtectedPage()
  return (
    <div>
      <input placeholder='Name'/>
      <input placeholder='Name'/>
    </div>
  );
};

export default CreateTripPage;
