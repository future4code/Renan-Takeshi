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
  Task,
} from "./App.styles";
import useTasks from "./hooks/useTasks";
import useForm from "./hooks/useForm";
import * as api from "./functions/axios";

function App() {
  const [tasks, requestTasks] = useTasks();
  const [form, onChangeForm, resetForm, fillForm] = useForm({
    text: "",
    day: "",
    completed: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeForm(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await api.createTask(form);
    resetForm();
    requestTasks();
  };

  const handleTaskClick = async (task) => {
    // fillForm(task)
    await api.deleteTask(task.id);
    // await api.editTask(task.id, { ...task, completed: !task.completed });
    requestTasks();
  };

  let monday = [],
    tuesday = [],
    wednesday = [],
    thursday = [],
    friday = [],
    saturday = [],
    sunday = [];

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

  const renderTasks = (array) =>
    array.map((item) => (
      <Task
        completed={item.completed}
        onClick={() => {
          handleTaskClick(item);
        }}
        key={item.id}
      >
        {item.text}
      </Task>
    ));

  const renderedMon = renderTasks(monday);
  const renderedTue = renderTasks(tuesday);
  const renderedWed = renderTasks(wednesday);
  const renderedThu = renderTasks(thursday);
  const renderedFri = renderTasks(friday);
  const renderedSat = renderTasks(saturday);
  const renderedSun = renderTasks(sunday);

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
