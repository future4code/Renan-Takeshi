import React from "react";
import {useHistory} from "react-router-dom"
const HomePage = () => {
  const history = useHistory()
  return (
    <div>
      Home
      <button onClick={()=>{history.push("/login")}}>Login</button>
      <button onClick={()=>{history.push("/trips/list")}}>TripsList</button>
    </div>
  );
};

export default HomePage;
