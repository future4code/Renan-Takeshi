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
  const [showMatches, setShowMatches] = useState(false);
  const [updateFlag, setFlag] = useState(false);

  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renan/clear";
  const putClearMatches = async () => {
    try {
      const response = await axios.put(url);
      setFlag(!updateFlag);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainContainer>
      <Header>
        <button
          onClick={() => {
            setShowMatches(!showMatches);
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
      {showMatches ? (
        <MatchesScreen updateFlag={updateFlag} />
      ) : (
        <ChoosePerson />
      )}
    </MainContainer>
  );
}

export default App;
