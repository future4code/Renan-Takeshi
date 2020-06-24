import { useState, useEffect } from "react";
import * as labex from "../functions/axios";

const useRequestTripDetails = (tripId) => {
  const [trip, setTrip] = useState();
  const token = localStorage.getItem('token')

  useEffect(() => {
    async function getTripDetail() {
      const response = await labex.getTripDetail(tripId, token);
      setTrip(response);
    }
    getTripDetail();
  }, [setTrip, tripId, token]);

  return trip;
};
export default useRequestTripDetails;
