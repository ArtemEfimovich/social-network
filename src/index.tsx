import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state";






ReactDOM.render( <App   dialogPage={state.dialogPage} profilePage={state.profilePage}/>,document.getElementById('root'))




