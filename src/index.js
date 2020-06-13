import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const feedbackReducer = (state={}, action) => {
    // state = [...state, action.payload]
    return state
}






const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    })
)

ReactDOM.render(<Provider store={reduxStore}><App/></Provider>, 
    document.getElementById('root'));

registerServiceWorker();
