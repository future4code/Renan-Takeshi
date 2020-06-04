import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.spacexdata.com/v3";

function MissionDetails(props) {
  const { missionId, backFunction } = props;
  const [mission, setMission] = useState();

  async function getOneMission() {
    try {
      const response = await axios.get(url + `/missions/${missionId}`);
      setMission(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getOneMission();
  }, []);


  return (
    <div>
      {mission && <p>{mission.description}</p>}
      <button onClick={backFunction}>Voltar</button>
    </div>
  );
}

export default MissionDetails;
