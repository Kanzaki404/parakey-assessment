import styled from "styled-components";
import resutlPageStrings from "../lang/resultPage.json";
import { StatisticsBar } from "../components/StatisticsBar";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
//import useApi from '../utils/useApi'
import useCalculateMean from '../utils/useCalculateMean'
import useCalculateMaximum from "../utils/useCalculateMaximum";
import useCalculateMinimum from "../utils/useCalculateMinimum";
import useCalculateMedian from "../utils/useCalculateMedian";
import { Loader } from "../components/Loader";
import {obj} from '../utils/obj'
const Container = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  align-items: center;
`;

const Title = styled.h3`
  width: 70%;
  text-align: center;
  margin-bottom: 100px;
`;

const StatisticsBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export function ResltPage() {
    let today = new Date()
    // const { loading, data } = useApi(Math.floor(today.getTime()/1000))
    let loading = false;
    
    const { meanValue } = useCalculateMean(obj)
    const { maximumValue } = useCalculateMaximum(obj)
    const { minimumValue } = useCalculateMinimum(obj)
    const { medianValue } = useCalculateMedian(obj)


  return (
    <Container>
        {loading?  <Loader/> : <>
      <Title>{resutlPageStrings.title}</Title>
      <StatisticsBarContainer>
        <StatisticsBar statisticsType="mean" value={meanValue}></StatisticsBar>
        <StatisticsBar statisticsType="median" value={medianValue}></StatisticsBar>
        <StatisticsBar statisticsType="min" value={minimumValue}></StatisticsBar>
        <StatisticsBar statisticsType="max" value={maximumValue}></StatisticsBar>
      </StatisticsBarContainer>
      <Link to={"/"}>
      <Button>{resutlPageStrings.newSearch}</Button>
      </Link>
      </>}
    </Container>
  );
}
