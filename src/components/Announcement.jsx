import styled, { keyframes } from "styled-components";
import { mobile } from "../responsive";

const infoA = keyframes`
   
  0% {
    animation-timing-function: ease-out;
    transform: scale(1);
    transform-origin: center center;
  }

  10% {
    animation-timing-function: ease-in;
    transform: scale(0.91);
  }

  17% {
    animation-timing-function: ease-out;
    transform: scale(0.98);
  }

  33% {
    animation-timing-function: ease-in;
    transform: scale(0.87);
  }

  45% {
    animation-timing-function: ease-out;
    transform: scale(1.3);
  
}
`;
const Container = styled.div`
  height: 2.5rem;
  background-color: #3fc7c7;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  animation: ${infoA} 2.5s ease 2s 3 normal forwards;
  text-shadow: 1px 1px 1px white;
  ${mobile({ height: "20px", fontSize: "1rem" })};
`;

const Announcement = () => {
  return (
    <Container>
      <Title>FREE SHIPPING on Orders Over 29 Eur</Title>
    </Container>
  );
};

export default Announcement;
