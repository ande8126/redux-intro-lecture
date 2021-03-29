import MonthItem from '../MonthItem/MonthItem';

function MonthList( props ){
    const calendar = props.calendar;
    
    return(
    <>
        <ul>
            {calendar.map( ( month ) => <MonthItem month={month} key={month.id}/>)}
        </ul>
    </>
    )
}

export default MonthList;