import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MonthList from '../MonthList/MonthList';
import Header from '../Header/Header';

function App() {

  //run GET call for calendar on startup
  useEffect( ()=>{
    getMonths();
  }, []);

  //useState variable to get and set calendar
  //looks like an array of objects, so useState starts as empty array
  const [ calendar, setCalendar ] = useState( [] );
  //stretch: new state to hold month name when its passed up
  const [ month, setMonth ] = useState( '' );

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

  //stretch: call back function to bring up month name
  let parentCallback = ( month ) =>{
    console.log( 'what do i got:', month );
    setMonth(month)
  }

  return (
    <div className="App">
      {/* stretch: new component Header with props for month name */}
      <Header month={month} />
      <br />
      <p>MONTHS</p>
      {/* JUST TESTING: <p>{JSON.stringify(calendar)}</p> */}
      {/* map out results, props to component */}
      <MonthList parentCallback={parentCallback} calendar={calendar} />

    </div>
  );
}


export default App;
