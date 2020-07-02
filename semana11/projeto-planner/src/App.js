import React from "react";
import {
  Main,
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
import { createTask, deleteTask } from "./functions/axios";

function App() {
  const [tasks, getTasks] = useTasks();
  const [form, onChangeForm, resetForm] = useForm({
    text: "",
    day: "",
    done: false,
  });

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

  const handleTaskClick = async (id) => {
    await deleteTask(id);
    getTasks();
  };

  let monday = [],
    renderedMon,
    tuesday = [],
    renderedTue,
    wednesday = [],
    renderedWed,
    thursday = [],
    renderedThu,
    friday = [],
    renderedFri,
    saturday = [],
    renderedSat,
    sunday = [],
    renderedSun;

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
  renderedMon = monday.map((item) => (
    <li
      onClick={() => {
        handleTaskClick(item.id);
      }}
      key={item.id}
    >
      {item.text}
    </li>
  ));
  renderedTue = tuesday.map((item) => (
    <li
      onClick={() => {
        handleTaskClick(item.id);
      }}
      key={item.id}
    >
      {item.text}
    </li>
  ));
  renderedWed = wednesday.map((item) => (
    <li
      onClick={() => {
        handleTaskClick(item.id);
      }}
      key={item.id}
    >
      {item.text}
    </li>
  ));
  renderedThu = thursday.map((item) => (
    <li
      onClick={() => {
        handleTaskClick(item.id);
      }}
      key={item.id}
    >
      {item.text}
    </li>
  ));
  renderedFri = friday.map((item) => (
    <li
      onClick={() => {
        handleTaskClick(item.id);
      }}
      key={item.id}
    >
      {item.text}
    </li>
  ));
  renderedSat = saturday.map((item) => (
    <li
      onClick={() => {
        handleTaskClick(item.id);
      }}
      key={item.id}
    >
      {item.text}
    </li>
  ));
  renderedSun = sunday.map((item) => (
    <li
      onClick={() => {
        handleTaskClick(item.id);
      }}
      key={item.id}
    >
      {item.text}
    </li>
  ));

  return (
    <Main>
      <FormWrapper>
        <form onSubmit={handleFormSubmit}>
          <input
            required
            name="text"
            value={form.text}
            onChange={handleInputChange}
            placeholder="Nova tarefa"
          />
          <select
            data-testid="select"
            required
            name="day"
            onChange={handleInputChange}
            value={form.day}
          >
            <option value="" disabled>
              Dia
            </option>
            <option value="mon">Monday</option>
            <option value="tue">Tuesday</option>
            <option value="wed">Wednesday</option>
            <option value="thu">Thursday</option>
            <option value="fri">Friday</option>
            <option value="sat">Saturday</option>
            <option value="sun">Sunday</option>
          </select>
          <button>Criar</button>
        </form>
      </FormWrapper>
      <Monday>
        <ul>{renderedMon}</ul>
      </Monday>
      <Tuesday>
        <ul>{renderedTue}</ul>
      </Tuesday>
      <Wednesday>
        <ul>{renderedWed}</ul>
      </Wednesday>
      <Thursday>
        <ul>{renderedThu}</ul>
      </Thursday>
      <Friday>
        <ul>{renderedFri}</ul>
      </Friday>
      <Saturday>
        <ul>{renderedSat}</ul>
      </Saturday>
      <Sunday>
        <ul>{renderedSun}</ul>
      </Sunday>
    </Main>
  );
}

export default App;
