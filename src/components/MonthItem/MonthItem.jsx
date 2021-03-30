//needed to send dispatches up to reducers
import { useDispatch } from 'react-redux';

function MonthItem( props ){
    const month = props.month;

    const alertUser = ( event ) =>{
        //needed to use dispatch
        const dispatch = useDispatch();
        console.log( 'in alertUser' );
        dispatch( {type: 'incrementCounter' } );
        dispatch( { type: 'addMonth', payload: month.name } );
        // using props.function to callback month 
        // props.parentCallback(month.name)
        // event.preventDefault();
    }

    return(
        <>
            <li onClick={alertUser}>{month.name}</li>
        </>
    )
}

export default MonthItem;