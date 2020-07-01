import React from "react";
import { render, wait ,screen} from "@testing-library/react";
import App from "./App";
import axios from "axios";
import userEvent from "@testing-library/user-event";

// axios.get = jest.fn().mockResolvedValue({ data: [] });
// axios.post = jest.fn().mockResolvedValue();

const criaTarefa = () => {
  const utils = render(<App />);

  const input = utils.getByPlaceholderText("Nova tarefa");
  const select = utils.getByText("Dia");

  userEvent.type(input, "Teste");
  userEvent.selectOptions(select, utils.queryByText(/Monday/i));

  const button = utils.getByText(/Criar/);

  userEvent.click(button);

  return utils;
};

describe("Testa a renderizacao inicial do form", () => {
  test("Input", () => {
    const { getByPlaceholderText,getByText } = render(<App />);
    expect(getByPlaceholderText("Nova tarefa")).toBeInTheDocument();
  });
  test("Botao de criar", () => {
    const { getByText } = render(<App />);
    expect(screen.getByText("Criar")).toBeInTheDocument();
  });
  test("Select", () => {
    const { getByText } = render(<App />);
    expect(getByText("Dia")).toBeInTheDocument();
  });
});

describe("Testa criacao e remocao de tarefa", () => {
  test("Criacao", async () => {
    const utils = render(<App />);

    const input = utils.getByPlaceholderText("Nova tarefa");
    const select = screen.getByText("Dia");
    const button = utils.getByText(/Criar/);

    userEvent.type(input, "Oie");
    userEvent.selectOptions(select, ['mon']);
    userEvent.click(button);

    const task = await utils.findByText(/Oie/);
    expect(task).toBeInTheDocument();
  });

  // test("Remocao", async () => {
  //   const utils = render(<App />);

  //   const task = await utils.findByText(/Oie/);

  //   userEvent.click(task);

  //   await wait(() => {
  //     expect(utils.queryByText("Oie")).toBeNull();
  //   });
  // });
});
