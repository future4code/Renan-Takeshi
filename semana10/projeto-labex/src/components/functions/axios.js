import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renan-mello/";

export const getTrips = async () => {
  try {
    const response = await axios.get(baseUrl + "trips");
    return response.data.trips;
  } catch (err) {
    console.log(err);
  }
};

export const getTripDetail = async (tripId, token) => {
  try {
    const headers = { headers: { auth: token } };
    const response = await axios.get(baseUrl + `trip/${tripId}`, headers);
    console.log(response.data.trip);
  } catch (err) {
    console.log(err);
  }
};

export const createTrip = async (tripBody, token) => {
  try {
    const headers = { headers: { auth: token } };
    const response = await axios.post(baseUrl + "trips", tripBody, headers);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const applyToTrip = async (tripId, body) => {
  try {
    const response = await axios.post(baseUrl + `trips/${tripId}/apply`, body);
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const login = async (email, pwd) => {
  const body = { email: email, password: pwd };
  try {
    const response = await axios.post(baseUrl + "login", body);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      return true;
    }
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
};

export const decideCandidate = async (tripId, candidateId, choice, token) => {
  const body = { approve: choice };
  const headers = { headers: { auth: token } };
  const response = await axios.put(
    baseUrl + `trips/${tripId}/candidates/${candidateId}/decide`,
    body,
    headers
  );
  console.log(response.data);
  try {
  } catch (err) {
    console.log(err);
  }
};
