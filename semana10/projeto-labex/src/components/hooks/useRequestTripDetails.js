import { useState, useEffect } from "react";
import { getTripDetails } from "../functions/axios";

const useRequestTripDetails = (tripId) => {
  const [trip, setTrip] = useState();

  async function requestTripDetails() {
    const trip = await getTripDetails(tripId);
    setTrip(trip);
  }
  useEffect(() => {
    requestTripDetails();
  }, []);

  return [trip, requestTripDetails];
};
export default useRequestTripDetails;
