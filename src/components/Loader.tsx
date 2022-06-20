import styled from "styled-components";

const LoaderCircle = styled.div`
  margin-top: 100px;
  height: 100px;
  min-width: 100px;
  border-left: 3px solid #3ed7cd;
  border-radius: 150px;
  -webkit-animation: rotate-center 0.6s linear infinite both;
  animation: rotate-center 0.6s linear infinite both;
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export function Loader() {
  return <LoaderCircle></LoaderCircle>;
}
