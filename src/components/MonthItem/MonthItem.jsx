function MonthItem( props ){
    const month = props.month;

    const alertUser = () =>{
        console.log( 'in alertUser' );
        alert(`you clicked ${month.name}`)
    }

    return(
        <>
            <li onClick={alertUser}>{month.name}</li>
        </>
    )
}

export default MonthItem;