import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import Card from './modules/card'

const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
padding: 20px 10px;
margin: 10px auto;
background: white;
font-family: Montserrat;
flex-wrap: wrap;
`;

const AppLabel = styled.button`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
  padding: 2px 10px;
  background-color: white;
  border-radius: 7px;
  border: 2px solid black;
  display: inline-block;
`;



function App() {

  const [avatar, setAvatar] = useState([])
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [data, setData] = useState(false)
  const get = () => {
    document.getElementById('lds-roller').style.display = 'flex'
    Axios.get('https://reqres.in/api/users?page=1').then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        setAvatar(avatar => [...avatar, res.data.data[i].avatar])
        setName(name => [...name, res.data.data[i].first_name + ' ' + res.data.data[i].last_name])
        setEmail(email => [...email, res.data.data[i].email])
      }
      setData(true)
      document.getElementById('lds-roller').style.display = 'none'
      document.getElementById('btn').style.display = 'none'
    })
  }
  return (
    <Container>
      <AppLabel id='btn' onClick={() => { get() }}>Get User</AppLabel>
      <div className="lds-roller" id="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      {data ? <>
        <Card avatar={avatar[0]} name={name[0]} email={email[0]} />
        <Card avatar={avatar[1]} name={name[1]} email={email[1]} />
        <Card avatar={avatar[2]} name={name[2]} email={email[2]} />
        <Card avatar={avatar[3]} name={name[3]} email={email[3]} />
        <Card avatar={avatar[4]} name={name[4]} email={email[4]} />
        <Card avatar={avatar[5]} name={name[5]} email={email[5]} />
      </> : <></>}
    </Container>
  );
}

export default App;
