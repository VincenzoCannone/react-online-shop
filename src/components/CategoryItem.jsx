import { mobile } from "../responsive";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const infoA = keyframes`
   
   
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  
}

`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${infoA} 2s ease 10s 3 normal forwards;
  ${mobile({ animation: "none" })}; ;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: transparent;
  color: #ffecec;
  cursor: pointer;
  font-weight: 900;
  border: #ffecec solid 3px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
