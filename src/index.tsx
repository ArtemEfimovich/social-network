import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                dialogPage={store._state.dialogPage}
                profilePage={store._state.profilePage}
                addPost={store.addPost}
                addMessage={store.addMessage}
                updateNewPost={store.updateNewPostText}
                updateNewMessage={store.updateNewMessage}
            />
        </BrowserRouter>
        , document.getElementById('root'))
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)






