import React, { useState } from "react";
import ChoosePerson from "./components/ChoosePerson";
import MatchesScreen from "./components/MatchesScreen";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
`;

const Header = styled.div``;

function App() {
  const [getMatches, setGetMatches] = useState(false);

  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renan/clear";
  const putClearMatches = async () => {
    try {
      const response = axios.put(url);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <MainContainer>
      <Header>
        <button
          onClick={() => {
            setGetMatches(!getMatches);
          }}
        >
          Trocar
        </button>
        <button
          onClick={() => {
            putClearMatches();
          }}
        >
          Limpar
        </button>
      </Header>
      {getMatches ? <MatchesScreen /> : <ChoosePerson />}
    </MainContainer>
  );
}

export default App;
