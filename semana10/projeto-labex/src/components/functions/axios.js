import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/renan-mello/";

// usado em ../hooks/useRequestTrips
export const getTrips = async () => {
  try {
    const response = await axios.get(baseUrl + "trips");
    return response.data.trips;
  } catch (error) {
    console.log(error.response);
  }
};

// usado em ../hooks/useRequestTripsDetails
export const getTripDetails = async (tripId, token) => {
  try {
    const headers = { headers: { auth: token } };
    const response = await axios.get(baseUrl + `trip/${tripId}`, headers);
    return response.data.trip;
  } catch (error) {
    window.alert(error.response.data.message);
    return false
  }
};

// usado em ../CreateTripPage
export const createTrip = async (tripBody, token) => {
  try {
    const headers = { headers: { auth: token } };
    const response = await axios.post(baseUrl + "trips", tripBody, headers);
    return response.data.message;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

// usado em ../ApplicationForm
export const applyToTrip = async (tripId, body) => {
  try {
    const response = await axios.post(baseUrl + `trips/${tripId}/apply`, body);
    return response.data.message;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

// usado em ../LoginPage
export const login = async (email, pwd) => {
  const body = { email: email, password: pwd };
  try {
    const response = await axios.post(baseUrl + "login", body);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      return true;
    }
  } catch (error) {
    window.alert(error.response.data.message)
    return false
  }
};

// usado em ../CandidateCard
export const decideCandidate = async (tripId, candidateId, choice, token) => {
  const body = { approve: choice };
  const headers = { headers: { auth: token } };
  try {
    const response = await axios.put(
      baseUrl + `trips/${tripId}/candidates/${candidateId}/decide`,
      body,
      headers
    );
    window.alert(response.data.message);
    return true
  } catch (error) {
    console.log(error);
    return false
  }
};
