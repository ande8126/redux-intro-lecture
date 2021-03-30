import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// needed for react + redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//our first "reducers"
const clicks = ( state=0, action )=>{
    console.log( 'in clicks reducer:', action );
    if( action.type === 'incrementCounter' ){
        state += 1;
    }
    return state;
}

//set initial state to the variable type for the reducer
const monthsClicked =( state=[], action )=>{
    if( action.type === 'addMonth'  && !state.includes( action.payload ) ){
        state = [ ...state, action.payload ]
    }
    return state;
}

const store = createStore(
    combineReducers({
        clicks: clicks,
        monthsClicked: monthsClicked
    })
)

ReactDOM.render(
<Provider store={ store }>
    <App />
</Provider>, document.getElementById('root'));
