import MonthItem from '../MonthItem/MonthItem';

function MonthList( props ){
    const calendar = props.calendar;
    //stretch: bringing callback down to pass through month to App.js
    // const parentCallback = props.parentCallback;
    
    return(
    <>
        <ul>
            {calendar.map( ( month ) => <MonthItem month={month} key={month.id}/>)}
        </ul>
    </>
    )
}

export default MonthList;