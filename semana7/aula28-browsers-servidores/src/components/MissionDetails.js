import React, { useState, useEffect } from "react";
import axios from "axios";

function MissionDetails(props) {
  const { url, missionId, backFunction } = props;
  const [mission, setMission] = useState();

  async function getOneMission() {
    try {
      const response = await axios.get(url + missionId);
      setMission(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getOneMission(); //eslint-disable-next-line
  }, []);

  return (
    <div>
      {mission && <p>{mission.description}</p>}
      <button onClick={backFunction}>Voltar</button>
    </div>
  );
}

export default MissionDetails;
