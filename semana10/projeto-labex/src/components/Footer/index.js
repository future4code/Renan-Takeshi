import React from "react";
import styled from "styled-components";
import footerText from "./footerText.png";

const FooterContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20px;
  grid-area: footer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img alt="LabeX footer" src={footerText} />
    </FooterContainer>
  );
};

export default Footer;
