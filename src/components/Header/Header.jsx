function Header( props ){
    let month = props.month;

    return(
        <header className="App-header">
            <h1 className="App-title">Select a Month</h1>
            <h3>{month}</h3>
            <br />
        </header>
    )
}

export default Header;