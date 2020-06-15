import React, { useEffect, useState } from "react";
import axios from "axios";

function MatchesScreen() {
  const [matches, setMatches] = useState([]);

  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renan/matches";
  const getMatches = async () => {
    const response = await axios.get(url);
    setMatches(response.data.matches);
  };
  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div>
      {matches.map((item) => (
        <img src={item.photo} style={{ width: "200px" }}/>
      ))}
    </div>
  );
}

export default MatchesScreen;
