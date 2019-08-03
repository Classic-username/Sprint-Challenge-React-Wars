import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CharComp from './components/CharComp';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const myArray = []

  const [ peopleData, setPeopleData ] = useState(myArray);


  

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log('in axios get', response.data.results)
        response.data.results.forEach(cv => {
          myArray.push(cv.name)
        })
        

      })
      .catch(reject => {
        console.log('failed to load', reject)
      })
  }, [])

  console.log('my array', myArray)

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {}
    </div>
  );
}

export default App;


/* const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.



  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharData />
    </div>
  );
}

export default App;
 */