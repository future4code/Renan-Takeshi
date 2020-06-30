import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("Novo post eh criado apos preencher o input e clicar em Adicionar", async () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: "Oie" } });
  fireEvent.click(addButton);

  await wait(() => {
    expect(queryByText("Oie")).toBeInTheDocument();
  });
});

test("Quando clicar em curtir o texto deve mudar para 'Descurtir'", async () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: "Oie" } });
  fireEvent.click(addButton);

  const likeButton = getByText("Curtir");
  fireEvent.click(likeButton);

  await wait(() => {
    expect(likeButton).toHaveTextContent("Descurtir");
  });
});

test("Quando clicar em Apagar, o post deve sumir da tela", async () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: "Apagou" } });
  fireEvent.click(addButton);
  fireEvent.click(getByText(/apagar/i));

  await wait(() => {
    expect(queryByText("Apagou")).not.toBeInTheDocument();
  });
});
