import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './App.jsx';
import './index.css';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDoApp from './ToDoApp';

// const store = createStore(reducer);

ReactDOM.render(
    <ToDoApp />
    // <Provider store={store} >
    //     <CounterApp />
    // </Provider>

    , document.getElementById('root'));