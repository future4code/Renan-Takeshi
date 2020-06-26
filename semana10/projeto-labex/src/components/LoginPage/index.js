import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "../functions/axios";
import useForm from "../hooks/useForm";
import Header from "../Header";
import Footer from "../Footer";
import { Body, Main } from "../styles";
import { FormContainer, Input, Button } from "./styles";

const LoginPage = () => {
  const [form, onChangeForm] = useForm({ email: "", password: "" });
  const history = useHistory();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const status = await login(form);
    status && history.replace("/trips/list");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChangeForm(name, value);
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
