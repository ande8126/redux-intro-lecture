import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';

function App() {

  //run GET call for calendar on startup
  useEffect( ()=>{
    getMonths();
  }, []);

  //useState variable to get and set calendar
  //looks like an array of objects, so useState starts as empty array
  const [ calendar, setCalendar ] = useState( [] )

  //function to use axios GET call and set to setCalendar
  let getMonths = () =>{
    console.log( 'in getMonths' );
    axios.get( '/calendar' ).then( ( response )=>{
      console.log( 'back from GET with response:', response.data );
      setCalendar( response.data );
    }).catch( ( err )=>{
      console.log( 'error in GET:', err );
      alert( err );
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Select a Month</h1>
        <h3>SELECTED MONTH GOES HERE</h3>
        <br />
      </header>
      <br />
      <p>List of months goes here</p>
      {/* JUST TESTING: <p>{JSON.stringify(calendar)}</p> */}
      {/* map out results, props to component */}
      <MonthList calendar={calendar} />

    </div>
  );
}


export default App;
