import React from "react";
import { useHistory, useParams } from "react-router-dom";

const TripDetailsPage = () => {
  const history = useHistory();
  const { tripId } = useParams();
  console.log(tripId);
  return (
    <div>
      Details {tripId}
      <button
        onClick={() => {
          history.push("/application-form");
        }}
      >
        Go to form
      </button>
    </div>
  );
};

export default TripDetailsPage;
