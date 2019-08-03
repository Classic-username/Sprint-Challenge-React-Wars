import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CharComp from './components/CharComp';
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ peopleData, setPeopleData ] = useState([]);

  let MasterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  let NiceDiv = styled.div`
    max-width: 250px;
    background: rgba(63, 63, 191, .2);
    padding-bottom: 10px;
`;
  
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        setPeopleData(response.data.results)
      })
      .catch(reject => {
        console.log('failed to load', reject)
      })
  }, [])
  console.log(peopleData)

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <MasterDiv className="App">
      <h1 className="Header">React Wars</h1>
      <NiceDiv>
        <h4>People List</h4>
        {peopleData.map(cv => {
          return (
          <CharComp props={cv} key={cv.name} />
          )
        })}
      </NiceDiv>
      
    </MasterDiv>
  );
}

export default App;