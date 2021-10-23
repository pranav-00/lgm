import React from 'react'
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 380px;
padding: 20px 10px;
margin: 10px auto;
border-radius: 4px;
box-shadow: 0 3px 6px 0 #555;
background: white;
font-family: Montserrat;
  & h3 , h4{
    margin: 2px;
  }
  & img{
    width: 90%;
  }
`;

export default function Card(props) {
  const { avatar, name } = props
  return (
    <Container>
      <img src={avatar} alt="ID1" />
      <h3>{name}</h3>
      <h4>george.bluth@reqres.in</h4>
    </Container>
  )
}
