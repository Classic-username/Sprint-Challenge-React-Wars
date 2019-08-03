import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharComp from './CharComp';


export default function CharData(){
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
  
    console.log('peopleData', peopleData)

    // return(
    //     peopleData.map(cv => {
    //         return(
    //         <CharComp cv />
    //         )
    //     })
    // )
}

/* export default function CharData(){


    const [ peopleData, setPeopleData ] = useState([]);
    useEffect(() => {
      axios
        .get('https://swapi.co/api/people/')
        .then(response => {
          console.log('in axios get', response.data.results)
          setPeopleData(response.data.results)
          
        })
        .catch(reject => {
          console.log('failed to load', reject)
        })
    }, [])
  
    console.log('peopledata', peopleData)

    return(
        <div>
            {peopleData.map(cv.name => {
            return(
                <CharComp  />
            )
            })}
        </div>
    )
        
} */