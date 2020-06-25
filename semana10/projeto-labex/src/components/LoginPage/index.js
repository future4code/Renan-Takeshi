import React from "react";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";
import { login } from "../functions/axios";

const LoginPage = () => {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const history = useHistory();

  const handleLoginClick = async () => {
    const message = await login(email, password);
    if (message === true) {
      history.push("/trips/list");
    }else{
      window.alert(message)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={handleEmailChange} placeholder="Email" type="email" />
      <input
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default LoginPage;
