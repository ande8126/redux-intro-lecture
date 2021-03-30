import { useSelector } from 'react-redux';

function Header( props ){
    let month = props.month;

    const clicks = useSelector( ( store )=>{
        return store.clicks;
    })

    const monthsClicked = useSelector( (store)=>{
        return store.monthsClicked;
    })

    return(
        <header className="App-header">
            <h1 className="App-title">Select a Month</h1>
            <h3>{month}</h3>
            <p>clicks: { clicks }</p>
            <p>Months clicked: { JSON.stringify(monthsClicked) }</p>
            <br />
        </header>
    )
}

export default Header;