import React from "react";
import {useHistory} from "react-router-dom"

const TripDetailsPage = () => {
  const history = useHistory()

  return (
    <div>
      Details
      <button onClick={()=>{history.push("/application-form")}}>Go to form</button>
    </div>
  );
};

export default TripDetailsPage;
