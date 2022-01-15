import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: auto;
  height: auto;
`;

const Success = () => {
  return (
    <Container>
      <Wrapper>Success</Wrapper>
    </Container>
  );
};

export default Success;
