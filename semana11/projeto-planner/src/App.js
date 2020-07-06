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
  const [form, handleFormChange, resetForm] = useForm({
    text: "",
    day: "",
    completed: false,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await api.createTask(form);
    resetForm();
    requestTasks();
  };

  const handleTaskClick = async (task) => {
    await api.deleteTask(task.id);
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
        onClick={() => handleTaskClick(item)}
        key={item.id}
      >
        {item.text}
      </Task>
    ));

  return (
    <Main>
      <FormWrapper>
        <form onSubmit={handleFormSubmit}>
          <input
            required
            name="text"
            value={form.text}
            onChange={handleFormChange}
            placeholder="Nova tarefa"
          />
          <label>
            Selecione o
            <select
              required
              name="day"
              onChange={handleFormChange}
              value={form.day}
            >
              <option value="" disabled>Dia</option>
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </select>
          </label>
          <button>Criar</button>
        </form>
      </FormWrapper>
      <Monday>
        <ul>Segunda{renderTasks(monday)}</ul>
      </Monday>
      <Tuesday>
        <ul>Terça{renderTasks(tuesday)}</ul>
      </Tuesday>
      <Wednesday>
        <ul>Quarta{renderTasks(wednesday)}</ul>
      </Wednesday>
      <Thursday>
        <ul>Quinta{renderTasks(thursday)}</ul>
      </Thursday>
      <Friday>
        <ul>Sexta{renderTasks(friday)}</ul>
      </Friday>
      <Saturday>
        <ul>Sábado{renderTasks(saturday)}</ul>
      </Saturday>
      <Sunday>
        <ul>Domingo{renderTasks(sunday)}</ul>
      </Sunday>
    </Main>
  );
}

export default App;
