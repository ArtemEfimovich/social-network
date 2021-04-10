import store, {RootStateType, StoreType} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";






const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                dialogPage={store._state.dialogPage}
                profilePage={store._state.profilePage}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root'))
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)






