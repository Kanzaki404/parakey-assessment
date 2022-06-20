import styled from 'styled-components'

const Container = styled.div`
  height: 70px;
  width: 60%;
  min-width: 200px;
  
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
`;

const StatisticsType = styled.div`
background-color: #3ED7CD;
border-radius: 5px 0 0 5px;
width: 75%;
height: 100%;
display: flex;
align-items: center;
text-transform: uppercase;
color: white;
h4{
    margin-left: 25px;
}

`
const StatiscicsTypeValue = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 25%;
height: 100%;
border-radius: 0 5px 5px 0;

`


export function StatisticsBar(props: Props){
    return(
        <Container>
            <StatisticsType>
                <h4>{props.statisticsType}</h4>
            </StatisticsType>
            <StatiscicsTypeValue>
            <h4>{props.value} &#8451; </h4>
            </StatiscicsTypeValue>
        </Container>
    )
}

type Props = {
    statisticsType: string,
    value: number
}