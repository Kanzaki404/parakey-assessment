import styled from "styled-components";
import startPageStrings from "../lang/startPage.json";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;
`;

const InfoContainer = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;
const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
//should be a form
export function StartPage() {
  return (
    <Container>
      <InfoContainer>
        <h4>{startPageStrings.title}</h4>
        <h3>{startPageStrings.appName}</h3>
      </InfoContainer>
      <FieldsContainer>
        <div>
          <label>{startPageStrings.cityLabel}</label>
          <Button>{startPageStrings.city}</Button>
        </div>
        <div>
          <label>{startPageStrings.mesureUnitLabel}</label>
          <Button>{startPageStrings.unit}</Button>
        </div>
        <Link to={"/result"}>
          <Button style={{ marginTop: "30px" }}>
            {startPageStrings.showStat}
          </Button>
        </Link>
      </FieldsContainer>
    </Container>
  );
}
