import React, { useState, useEffect } from "react";
import ProfileScreen from "./components/ProfileScreen";
import MatchesScreen from "./components/MatchesScreen";
import styled from "styled-components";
import * as astromatch from "./axios";

const MainContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const Header = styled.div``;

function App() {
  const [showMatches, setShowMatches] = useState(false);
  const [matches, setMatches] = useState([]);
  const [profile, setProfile] = useState();

  useEffect(() => {
    astromatch.getProfileToChoose(setProfile);
    astromatch.getMatches(setMatches);
  }, []);

  const choosePerson = async (id, choice) => {
    const isMatch = await astromatch.choosePerson(id, choice);
    if (isMatch) {
      astromatch.getMatches(setMatches);
      if (window.confirm("Match! Deseja enviar uma mensagem ?")) {
      } else {
        astromatch.getProfileToChoose(setProfile);
      }
    } else {
      astromatch.getProfileToChoose(setProfile);
    }
    console.log(isMatch);
  };

  return (
    <MainContainer>
      <Header>
        <button style={{width:"100px"}}
          onClick={() => {
            setShowMatches(!showMatches);
          }}
        >
          {showMatches ? "Ver perfil" : "Ver matches"}
        </button>
        <button
          onClick={async () => {
            await astromatch.clearMatches();
            setMatches([]);
          }}
        >
          Limpar matches
        </button>
      </Header>
      {showMatches ? (
        <MatchesScreen matches={matches} />
      ) : (
        <ProfileScreen profile={profile} choosePerson={choosePerson} />
      )}
    </MainContainer>
  );
}

export default App;
