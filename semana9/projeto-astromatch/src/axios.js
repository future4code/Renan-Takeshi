import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renan-takeshi-mello/";

export const getMatches = async (setFunction) => {
  const response = await axios.get(baseUrl + "matches");
  setFunction(response.data.matches);
};

export const clearMatches = async (setFunction) => {
  try {
    await axios.put(baseUrl + "clear");
    setFunction([])
  } catch (err) {
    console.log(err);
  }
};

export const getProfileToChoose = async (setFunction) => {
  try {
    const response = await axios.get(baseUrl + "person");
    setFunction(response.data.profile);
  } catch (err) {
    console.log(err);
  }
};

export const postChoosePerson = async (id, choice) => {
  try {
    const body = { id: id, choice: choice };
    const response = await axios.post(baseUrl + "choose-person", body);
    return response.data.isMatch;
  } catch (err) {
    console.log(err);
  }
};
