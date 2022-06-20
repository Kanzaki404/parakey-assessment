import { Button } from "../components/Button";
import styled from "styled-components";
import errorPageString from "../lang/errorPage.json";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  padding-top: 100px;
  box-sizing: border-box;
  align-items: center;
`;

const InfoContainer = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 100px;
`;

export function ErrorPage() {
  return (
    <Container>
      <InfoContainer>
        <h3>{errorPageString.error}</h3>
        <h3>{errorPageString.errorMessage}</h3>
        <h2>¯\_(ツ)_/¯</h2>
      </InfoContainer>
      <Link to={"/"}>
        <Button>{errorPageString.redirectToMainPage}</Button>
      </Link>
    </Container>
  );
}
