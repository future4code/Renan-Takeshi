import { useState, useEffect } from "react";
import { getTasks } from "../functions/axios";

const useTasks = (initialState) => {
  const [tasks, setTasks] = useState(initialState);

  async function requestTasks() {
    const response = await getTasks();
    setTasks(response);
  }
  useEffect(() => {
    requestTasks();
  }, []);

  return [tasks, requestTasks];
};
export default useTasks;
