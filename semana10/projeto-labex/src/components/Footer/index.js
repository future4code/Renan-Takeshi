import React from "react";
import footerText from "./footerText.png";
import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <img alt="LabeX footer" src={footerText} />
    </FooterContainer>
  );
};

export default Footer;
