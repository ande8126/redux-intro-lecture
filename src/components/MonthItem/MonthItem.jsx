function MonthItem( props ){
    const month = props.month;

    const alertUser = ( event ) =>{
        console.log( 'in alertUser' );
        alert(`you clicked ${month.name}`)
        // using props.function to callback month 
        props.parentCallback(month.name)
        event.preventDefault();
    }

    return(
        <>
            <li onClick={alertUser}>{month.name}</li>
        </>
    )
}

export default MonthItem;