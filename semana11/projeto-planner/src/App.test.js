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

  userEvent.type(input, text);
  userEvent.selectOptions(select, [day]);

  const button = utils.getByText(/Criar/);

  userEvent.click(button);

  return utils;
};

describe("Testa a renderizacao inicial do form", () => {
  test("Input", () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText("Nova tarefa")).toBeInTheDocument();
  });
  test("Botao de criar", () => {
    const { getByText } = render(<App />);
    expect(getByText("Criar")).toBeInTheDocument();
  });
  test("Select", () => {
    const { getByText } = render(<App />);
    expect(getByText("Dia")).toBeInTheDocument();
  });
});

describe("Testa criacao e remocao de tarefa", () => {
  test("Criacao segunda", async () => {
    const utils = criaTarefa("segunda", "mon");

    const task = await utils.findByText(/segunda/, 20000);
    expect(task).toBeInTheDocument();
  });
  test("Remocao segunda", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/segunda/, 20000);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("segunda")).toBeNull();
    });
  });

  test("Criacao terca", async () => {
    const utils = criaTarefa("terca", "tue");

    const task = await utils.findByText(/terca/, 20000);
    expect(task).toBeInTheDocument();
  });
  test("Remocao terca", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/terca/, 20000);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("terca")).toBeNull();
    });
  });

  test("Criacao quarta", async () => {
    const utils = criaTarefa("quarta", "wed");

    const task = await utils.findByText(/quarta/, 20000);
    expect(task).toBeInTheDocument();
  });
  test("Remocao quarta", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/quarta/, 20000);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("quarta")).toBeNull();
    });
  });

  test("Criacao quinta", async () => {
    const utils = criaTarefa("quinta", "thu");

    const task = await utils.findByText(/quinta/, 20000);
    expect(task).toBeInTheDocument();
  });
  test("Remocao quinta", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/quinta/, 20000);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("quinta")).toBeNull();
    });
  });

  test("Criacao sexta", async () => {
    const utils = criaTarefa("sexta", "fri");

    const task = await utils.findByText(/sexta/, 20000);
    expect(task).toBeInTheDocument();
  });
  test("Remocao sexta", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/sexta/, 20000);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("sexta")).toBeNull();
    });
  });

  test("Criacao sabado", async () => {
    const utils = criaTarefa("sabado", "sat");

    const task = await utils.findByText(/sabado/, 20000);
    expect(task).toBeInTheDocument();
  });
  test("Remocao sabado", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/sabado/, 20000);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("sabado")).toBeNull();
    });
  });

  test("Criacao domingo", async () => {
    const utils = criaTarefa("domingo", "sun");

    const task = await utils.findByText(/domingo/, 20000);
    expect(task).toBeInTheDocument();
  });
  test("Remocao domingo", async () => {
    const utils = render(<App />);

    const task = await utils.findByText(/domingo/, 20000);

    userEvent.click(task);

    await wait(() => {
      expect(utils.queryByText("domingo")).toBeNull();
    });
  });
});
