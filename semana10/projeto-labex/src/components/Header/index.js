import React from "react";
import logo from "./logo.png";
import { HeaderContainer } from "./styles";

const Header = () => (
  <HeaderContainer>
    <img alt="LabeX logo" src={logo} />
  </HeaderContainer>
);

export default Header;
