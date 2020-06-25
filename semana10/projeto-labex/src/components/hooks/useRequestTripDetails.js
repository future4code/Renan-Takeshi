import { useState, useEffect } from "react";
import { getTripDetails } from "../functions/axios";

const useRequestTripDetails = (tripId, token) => {
  const [trip, setTrip] = useState();

  useEffect(() => {
    async function requestTripDetail() {
      const response = await getTripDetails(tripId, token);
      setTrip(response);
    }
    requestTripDetail();
  }, [setTrip, tripId, token]);

  return trip;
};
export default useRequestTripDetails;
