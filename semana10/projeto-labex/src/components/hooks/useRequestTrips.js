import { useState, useEffect } from "react";
import * as labex from "../functions/axios";

const useRequestTrips = () => {
  const [trips, setTrips] = useState();

  useEffect(() => {
    async function getTrips() {
      const response = await labex.getTrips();
      setTrips(response);
    }
    getTrips();
  }, [setTrips]);

  return trips;
};
export default useRequestTrips;
