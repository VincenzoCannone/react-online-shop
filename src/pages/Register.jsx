import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regAuth = (e) => {
    e.preventDefault();
    let req = {
      name: name,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    };
    //! CHECK
    console.log(req);
    const settings = {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`http://localhost:3000/api/auth/register/`, settings)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          switch (response.status) {
            case 403:
              return response.json().then((err) => {
                throw new Error(err.message);
              });
            default:
              return response.json().then((err) => {
                throw new Error(err.message);
              });
          }
        }
      })
      .then((data) => {
        setName("");
        setLastName("");
        setNewPassword("");
        setEmail("");
        setPassword("");
        console.log(data);
        window.location.assign("http://localhost:3001/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={regAuth}>
          <Input
            type="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
