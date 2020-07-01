import React from "react";
import {
  Body,
  FormWrapper,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
} from "./App.styles";
import useTasks from "./hooks/useTasks";
import useForm from "./hooks/useForm";
import { createTask } from "./functions/axios";

function App() {
  const [tasks, getTasks] = useTasks();
  const [form, onChangeForm, resetForm] = useForm({ text: "", day: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeForm(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const status = await createTask(form);
    status && resetForm();
  };

  return (
    <div>
      <Body>
        <FormWrapper>
          <form onSubmit={handleFormSubmit}>
            <input
              required
              name="text"
              value={form.text}
              onChange={handleInputChange}
              placeholder="task"
            />
            <select
              required
              name="day"
              onChange={handleInputChange}
              value={form.day}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </select>
            <button>Submit</button>
          </form>
        </FormWrapper>
        <Monday></Monday>
        <Tuesday></Tuesday>
        <Wednesday></Wednesday>
        <Thursday></Thursday>
        <Friday></Friday>
        <Saturday></Saturday>
        <Sunday></Sunday>
      </Body>
    </div>
  );
}

export default App;
