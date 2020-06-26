import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Body, Main } from "../styles";
import { ButtonsContainer, Button } from "./styles";

const HomePage = () => {
  const history = useHistory();

  const handleClickLogin = () => {
    const isLoggedIn = Boolean(localStorage.getItem("token"));
    isLoggedIn ? history.push("/trips/list") : history.push("/login");
  };
  return (
    <Body>
      <Header />
      <Main>
        <ButtonsContainer>
          <Button onClick={handleClickLogin}>Access as Administrator</Button>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              history.push("/trips/list");
            }}
          >
            Access as Candidate
          </Button>
        </ButtonsContainer>
      </Main>
      <Footer />
    </Body>
  );
};

export default HomePage;
