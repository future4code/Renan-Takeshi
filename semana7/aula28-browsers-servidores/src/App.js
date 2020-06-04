import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MissionDetails from "./components/MissionDetails";
import MissionsGrid from "./components/MissionsGrid";

const url = "https://api.spacexdata.com/v3/missions/";

const MainApp = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
`

function App() {
  const [missionsList, setMissions] = useState([]);
  const [missionId, setId] = useState("");

  async function getAllMissions() {
    try {
      const response = await axios.get(url);
      setMissions(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllMissions();
  }, []);

  return (
    <MainApp>
      <h2>SpaceX</h2>
      {!missionId ? (
        <MissionsGrid missions={missionsList} setMission={setId} />
      ) : (
        <MissionDetails
          url={url}
          missionId={missionId}
          backFunction={() => {
            setId("");
          }}
        />
      )}
    </MainApp>
  );
}

export default App;
