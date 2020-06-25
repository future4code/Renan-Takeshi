import { useState, useEffect } from "react";
import { getTripDetails } from "../functions/axios";

const useRequestTripDetails = (tripId, token) => {
  const [trip, setTrip] = useState();
  const [aux, setAux] = useState(0);

  useEffect(() => {
    async function requestTripDetail() {
      const trip = await getTripDetails(tripId, token);
      trip && setTrip(trip);
    }
    requestTripDetail();
  }, [setTrip, tripId, token, aux]);

  const forceUpdate = () => {
    setAux(aux + 1);
  };

  return [trip, forceUpdate];
};
export default useRequestTripDetails;
