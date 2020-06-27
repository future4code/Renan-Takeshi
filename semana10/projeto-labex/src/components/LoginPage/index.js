import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { login } from "../functions/axios";
import Header from "../Header";
import Footer from "../Footer";
import { Body, Main } from "../styles/common";
import { FormContainer, Input, Button } from "./styles";

const LoginPage = () => {
  const [form, onChangeForm] = useForm({ email: "renan@renan", password: "renan" });
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeForm(name, value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const status = await login(form);
    status && history.replace("/trips/list");
  };

  return (
    <Body>
      <Header />
      <Main>
        <FormContainer>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="example@domain"
              type="email"
            />
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="Your password ..."
              type="password"
            />
            <Button>Login</Button>
          </form>
        </FormContainer>
      </Main>
      <Footer />
    </Body>
  );
};

export default LoginPage;
