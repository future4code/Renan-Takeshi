import { useState, useEffect } from "react";
import { getTripDetails } from "../functions/axios";

const useRequestTripDetails = (tripId, token) => {
  const [trip, setTrip] = useState();

  useEffect(() => {
    async function requestTripDetail() {
      const trip = await getTripDetails(tripId, token);
      trip && setTrip(trip);
    }
    requestTripDetail();
  }, [setTrip, tripId, token]);

  return trip;
};
export default useRequestTripDetails;
