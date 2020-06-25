import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "../functions/axios";
import useForm from "../hooks/useForm";

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
    <form onSubmit={handleLoginSubmit}>
      <h2>Login</h2>
      <input
        name="email"
        value={form.email}
        onChange={handleInputChange}
        placeholder="Email"
        type="email"
      />
      <input
        name="password"
        value={form.password}
        onChange={handleInputChange}
        placeholder="Password"
        type="password"
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
