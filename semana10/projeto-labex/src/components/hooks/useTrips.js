import { useState, useEffect } from "react";
import * as labex from "../functions/axios";
const useTrips = () => {
  const [trips, setTrips] = useState();
  async function oi() {
    const response = await labex.getTrips();
    setTrips(response);
  }
  useEffect(() => {

    oi();
  }, []);

  return trips;
};
export default useTrips;
