import { useState, useEffect } from "react";
import { getTrips } from "../functions/axios";

const useRequestTrips = () => {
  const [trips, setTrips] = useState();

  useEffect(() => {
    async function requestTrips() {
      const response = await getTrips();
      setTrips(response);
    }
    requestTrips();
  }, [setTrips]);

  return trips;
};
export default useRequestTrips;
