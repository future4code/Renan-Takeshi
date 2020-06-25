import React from "react";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";
import { login } from "../functions/axios";

const LoginPage = () => {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const history = useHistory();

  const handleClickLogin = async () => {
    const status = await login(email, password);
    status && history.replace("/trips/list");
  };

  return (
    <form>
      <h2>Login</h2>
      <input
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        type="email"
      />
      <input
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        type="password"
      />
      <button onClick={handleClickLogin}>Login</button>
    </form>
  );
};

export default LoginPage;
