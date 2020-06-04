import React, { useState, useEffect } from "react";
import axios from "axios";
import MissionDetails from "./components/MissionDetails";

const url = "https://api.spacexdata.com/v3";

function App() {
  const [missionsList, setMissions] = useState([]);
  const [missionId, setId] = useState("");

  async function getAllMissions() {
    try {
      const response = await axios.get(url + "/missions");
      setMissions(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllMissions();
  }, []);

  const missionListRendered = missionsList.map((item) => (
    <p
      key={item.mission_id}
      onClick={() => {
        setId(item.mission_id);
      }}
    >
      {item.mission_name}
    </p>
  ));

  return !missionId ? (
    <div> {missionListRendered}</div>
  ) : (
    <MissionDetails missionId={missionId} backFunction={()=>{setId("")}}/>
  );
}

export default App;
