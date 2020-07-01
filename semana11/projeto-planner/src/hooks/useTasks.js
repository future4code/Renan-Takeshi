import { useState, useEffect } from "react";
import { getTasks } from "../functions/axios";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const requestTasks = async () => {
    const response = await getTasks();
    setTasks(response);
  };
  useEffect(() => {
    requestTasks();
  }, []);

  return [tasks, requestTasks];
};
export default useTasks;
