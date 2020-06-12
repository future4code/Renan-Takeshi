import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 60%;
`;

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
    <MainContainer>
      {mission && (
        <div>
          <h1>
            {mission.mission_name} ({mission.mission_id})
          </h1>
          <img src={`https://picsum.photos/640/480?a=${missionId}`} />
          <p>
            {mission.manufacturers.length > 1 ? (
              <b>Manufacturers: </b>
            ) : (
              <b>Manufacturer: </b>
            )}
            {mission.manufacturers.join(", ")}
          </p>
          <p>{mission.description}</p>
        </div>
      )}
      <button onClick={backFunction}>Back</button>
    </MainContainer>
  );
}

export default MissionDetails;
