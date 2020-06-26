import React from "react";
import logo from "./logo.png";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  grid-area: header;
`;

const Header = () => (
  <HeaderContainer>
    <img alt="LabeX logo" src={logo} />
  </HeaderContainer>
);

export default Header;
