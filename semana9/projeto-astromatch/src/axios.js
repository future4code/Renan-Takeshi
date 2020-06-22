import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renan-takeshi-mello/";

export const getMatches = async (setMatches) => {
  try {
    const response = await axios.get(baseUrl + "matches");
    setMatches(response.data.matches);
  } catch (err) {
    console.log(err);
  }
};

export const clearMatches = async () => {
  try {
    await axios.put(baseUrl + "clear");
  } catch (err) {
    console.log(err);
  }
};

export const getProfileToChoose = async (setProfile) => {
  try {
    const response = await axios.get(baseUrl + "person");
    setProfile(response.data.profile);
  } catch (err) {
    console.log(err);
  }
};

export const choosePerson = async (id, choice) => {
  try {
    const body = { id: id, choice: choice };
    const response = await axios.post(baseUrl + "choose-person", body);
    return response.data.isMatch;
  } catch (err) {
    console.log(err);
  }
};
