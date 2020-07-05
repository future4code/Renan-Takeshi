import React from "react";
import { render, wait } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

const createTask = (text, day) => {
  const utils = render(<App />);

  const input = utils.getByPlaceholderText("Nova tarefa");
  const select = utils.getByLabelText(/selecione/i);
  const button = utils.getByText(/Criar/);

  userEvent.type(input, text);
  userEvent.selectOptions(select, utils.getByText(day).value);
  userEvent.click(button);

  return [utils, input, select];
};

describe("Testa a renderizacao inicial do form", () => {
  test("Input, select e button", () => {
    const { getByPlaceholderText, getByLabelText, getByText } = render(<App />);
    expect(getByPlaceholderText("Nova tarefa")).toHaveValue("");
    expect(getByLabelText(/selecione/i)).toHaveValue("");
    expect(getByText("Criar")).toBeInTheDocument();
  });
});

describe("Testa criacao e remocao de tarefa para cada dia", () => {
  describe("Segunda", () => {
    test("Criacao ", async () => {
      const [utils, input, select] = createTask("segunda", "Monday");

      const task = await utils.findByText(/segunda/);

      expect(task).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(select).toHaveValue("");
    });
    test("Remocao", async () => {
      const utils = render(<App />);

      const task = await utils.findByText(/segunda/);

      userEvent.click(task);

      await wait(() => {
        expect(utils.queryByText("segunda")).toBeNull();
      });
    });
  });

  describe("Terca", () => {
    test("Criacao", async () => {
      const [utils, input, select] = createTask("terca", "Tuesday");

      const task = await utils.findByText(/terca/);
      expect(task).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(select).toHaveValue("");
    });
    test("Remocao", async () => {
      const utils = render(<App />);

      const task = await utils.findByText(/terca/);

      userEvent.click(task);

      await wait(() => {
        expect(utils.queryByText("terca")).toBeNull();
      });
    });
  });

  describe("Quarta", () => {
    test("Criacao", async () => {
      const [utils, input, select] = createTask("quarta", "Wednesday");

      const task = await utils.findByText(/quarta/);
      expect(task).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(select).toHaveValue("");
    });
    test("Remocao", async () => {
      const utils = render(<App />);

      const task = await utils.findByText(/quarta/);

      userEvent.click(task);

      await wait(() => {
        expect(utils.queryByText("quarta")).toBeNull();
      });
    });
  });

  describe("Quinta", () => {
    test("Criacao", async () => {
      const [utils, input, select] = createTask("quinta", "Thursday");

      const task = await utils.findByText(/quinta/);
      expect(task).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(select).toHaveValue("");
    });
    test("Remocao", async () => {
      const utils = render(<App />);

      const task = await utils.findByText(/quinta/);

      userEvent.click(task);

      await wait(() => {
        expect(utils.queryByText("quinta")).toBeNull();
      });
    });
  });

  describe("Sexta", () => {
    test("Criacao", async () => {
      const [utils, input, select] = createTask("sexta", "Friday");

      const task = await utils.findByText(/sexta/);
      expect(task).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(select).toHaveValue("");
    });
    test("Remocao", async () => {
      const utils = render(<App />);

      const task = await utils.findByText(/sexta/);

      userEvent.click(task);

      await wait(() => {
        expect(utils.queryByText("sexta")).toBeNull();
      });
    });
  });

  describe("Sabado", () => {
    test("Criacao", async () => {
      const [utils, input, select] = createTask("sabado", "Saturday");

      const task = await utils.findByText(/sabado/);
      expect(task).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(select).toHaveValue("");
    });
    test("Remocao", async () => {
      const utils = render(<App />);

      const task = await utils.findByText(/sabado/);

      userEvent.click(task);

      await wait(() => {
        expect(utils.queryByText("sabado")).toBeNull();
      });
    });
  });

  describe("Domingo", () => {
    test("Criacao", async () => {
      const [utils, input, select] = createTask("domingo", "Sunday");

      const task = await utils.findByText(/domingo/);
      expect(task).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(select).toHaveValue("");
    });
    test("Remocao", async () => {
      const utils = render(<App />);

      const task = await utils.findByText(/domingo/);

      userEvent.click(task);

      await wait(() => {
        expect(utils.queryByText("domingo")).toBeNull();
      });
    });
  });
});
