import axios from "axios";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-renan-takeshi";

export const getTasks = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const createTask = async (task) => {
  try {
    const response = await axios.post(baseUrl, task);
    return response.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const editTask = async (id, body) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, body);
    return response.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  };