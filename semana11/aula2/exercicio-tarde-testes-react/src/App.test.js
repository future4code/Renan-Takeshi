import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("Quando preenchar o input e clicar em Adicionar, deve aparecer o conteudo na tela", async () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: "Oie" } });
  fireEvent.click(addButton);

  await wait(() => {
    expect(getByText("Oie")).toBeInTheDocument();
  });
});

test("Quando clicar em Curtir, o texto deve mudar para 'Descurtir'", async () => {
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
    expect(queryByText("Apagou")).toBeNull();
  });
});

test("Quando enviar um post, deve apagar o input", async () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: "Some" } });
  fireEvent.click(addButton);
  fireEvent.click(getByText(/apagar/i));

  await wait(() => {
    expect(input).toHaveTextContent("");
  });
});

test("Quando a lista estiver vazia, deve mostrar 'Nenhum post'", async () => {
  const { getByText } = render(<App />);

  await wait(() => {
    expect(getByText(/Nenhum post/i)).toBeInTheDocument();
  });
});

test("Quando houverem posts, nao deve mostrar 'Nenhum post'", async () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: "Some" } });
  fireEvent.click(addButton);

  await wait(() => {
    expect(queryByText(/Nenhum post/i)).toBeNull();
  });
});

test("Quando houverem posts, deve mostrar a quantidade de posts", async () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: "Um post" } });
  fireEvent.click(addButton);

  await wait(() => {
    expect(getByText(/Quantidade de posts: 1/i)).toBeInTheDocument();
  });
});

test("Quando tentar criar um post vazio, deve mostrar uma mensagem de erro", async () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: "  " } });
  fireEvent.click(addButton);

  await wait(() => {
    expect(getByText(/Show some creativity/i)).toBeInTheDocument();
  });
});
