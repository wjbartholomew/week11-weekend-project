import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const feedbackReducer = (state={}, action) => {
   switch (action.type) {
            case 'FEELING':
                return {...state, feeling: action.payload}
            case 'UNDERSTANDING':
                return { ...state, understanding: action.payload}
            case 'SUPPORT':
                return { ...state, support: action.payload }
            case 'COMMENTS':
                return { ...state, comments: action.payload }
            default:
                return state;
   }
}






const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    })
)

ReactDOM.render(<Provider store={reduxStore}><App/></Provider>, 
    document.getElementById('root'));


