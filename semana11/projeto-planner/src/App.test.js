import React from "react";
import { render, wait, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import userEvent from "@testing-library/user-event";

// axios.get = jest.fn().mockResolvedValue({ data: [] });
// axios.post = jest.fn().mockResolvedValue();

const criaTarefa = (text, day) => {
  const utils = render(<App />);

  const input = utils.getByPlaceholderText("Nova tarefa");
  const select = utils.getByTestId("select");
  const button = utils.getByText(/Criar/);

  userEvent.type(input, text);
  userEvent.selectOptions(select, utils.getByText(day).value);
  userEvent.click(button);

  return utils;
};

describe("Testa a renderizacao inicial do form", () => {
  test("Input", () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText("Nova tarefa")).toBeInTheDocument();
  });
  test("Select", () => {
    const { getByText } = render(<App />);
    expect(getByText("Dia")).toBeInTheDocument();
  });
  test("Botao de criar", () => {
    const { getByText } = render(<App />);
    expect(getByText("Criar")).toBeInTheDocument();
  });
});

describe("Testa criacao e remocao de tarefa", () => {
  test("Criacao segunda", async () => {
    const utils = criaTarefa("segunda", "Monday");

    const task = await utils.findByText(/segunda/);
    expect(task).toBeInTheDocument();
  });
  test("Remocao segunda", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/segunda/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("segunda")).toBeNull();
    });
  });

  test("Criacao terca", async () => {
    const utils = criaTarefa("terca", "Tuesday");

    const task = await utils.findByText(/terca/);
    expect(task).toBeInTheDocument();
  });
  test("Remocao terca", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/terca/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("terca")).toBeNull();
    });
  });

  test("Criacao quarta", async () => {
    const utils = criaTarefa("quarta", "Wednesday");

    const task = await utils.findByText(/quarta/);
    expect(task).toBeInTheDocument();
  });
  test("Remocao quarta", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/quarta/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("quarta")).toBeNull();
    });
  });

  test("Criacao quinta", async () => {
    const utils = criaTarefa("quinta", "Thursday");

    const task = await utils.findByText(/quinta/);
    expect(task).toBeInTheDocument();
  });
  test("Remocao quinta", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/quinta/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("quinta")).toBeNull();
    });
  });

  test("Criacao sexta", async () => {
    const utils = criaTarefa("sexta", "Friday");

    const task = await utils.findByText(/sexta/);
    expect(task).toBeInTheDocument();
  });
  test("Remocao sexta", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/sexta/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("sexta")).toBeNull();
    });
  });

  test("Criacao sabado", async () => {
    const utils = criaTarefa("sabado", "Saturday");

    const task = await utils.findByText(/sabado/);
    expect(task).toBeInTheDocument();
  });
  test("Remocao sabado", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/sabado/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("sabado")).toBeNull();
    });
  });

  test("Criacao domingo", async () => {
    const utils = criaTarefa("domingo", "Sunday");

    const task = await utils.findByText(/domingo/);
    expect(task).toBeInTheDocument();
  });
  test("Remocao domingo", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/domingo/);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("domingo")).toBeNull();
    });
  });
});
