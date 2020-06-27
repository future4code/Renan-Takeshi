import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Body, Main, Button } from "../styles/common";
import { ButtonsContainer } from "./styles";

const HomePage = () => {
  const history = useHistory();

  const handleClickLogin = () => {
    history.push("/login");
  };

  const handleClickUser = () => {
    localStorage.removeItem("token");
    history.push("/trips/list");
  };

  return (
    <Body>
      <Header />
      <Main>
        <ButtonsContainer>
          <Button onClick={handleClickLogin}>Access as Administrator</Button>
          <Button onClick={handleClickUser}>Access as Candidate</Button>
        </ButtonsContainer>
      </Main>
      <Footer />
    </Body>
  );
};

export default HomePage;
