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
    await createTask(form);
    resetForm();
    getTasks();
  };

  let monday = [],
    renderedMonday,
    tuesday = [],
    renderedTuesday,
    wednesday = [],
    renderedWednesday,
    thursday = [],
    renderedThusday,
    friday = [],
    renderedFriday,
    saturday = [],
    renderedSaturday,
    sunday = [],
    renderedSunday;

  tasks &&
    tasks.forEach((task) => {
      switch (task.day) {
        case "mon":
          monday.push(task);
          break;
        case "tue":
          tuesday.push(task);
          break;
        case "wed":
          wednesday.push(task);
          break;
        case "thu":
          thursday.push(task);
          break;
        case "fri":
          friday.push(task);
          break;
        case "sat":
          saturday.push(task);
          break;
        case "sun":
          sunday.push(task);
          break;
        default:
          break;
      }
    });

  if (tasks) {
    renderedMonday = monday.map((item) => <li key={item.id}>{item.text}</li>);
    renderedTuesday = tuesday.map((item) => <li key={item.id}>{item.text}</li>);
    renderedWednesday = wednesday.map((item) => (
      <li key={item.id}>{item.text}</li>
    ));
    renderedThusday = thursday.map((item) => (
      <li key={item.id}>{item.text}</li>
    ));
    renderedFriday = friday.map((item) => <li key={item.id}>{item.text}</li>);
    renderedSaturday = saturday.map((item) => (
      <li key={item.id}>{item.text}</li>
    ));
    renderedSunday = sunday.map((item) => <li key={item.id}>{item.text}</li>);
  }

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
        <Monday>
          <ul>{renderedMonday}</ul>
        </Monday>
        <Tuesday>
          <ul>{renderedTuesday}</ul>
        </Tuesday>
        <Wednesday>
          <ul>{renderedWednesday}</ul>
        </Wednesday>
        <Thursday>
          <ul>{renderedThusday}</ul>
        </Thursday>
        <Friday>
          <ul>{renderedFriday}</ul>
        </Friday>
        <Saturday>
          <ul>{renderedSaturday}</ul>
        </Saturday>
        <Sunday>
          <ul>{renderedSunday}</ul>
        </Sunday>
      </Body>
    </div>
  );
}

export default App;
