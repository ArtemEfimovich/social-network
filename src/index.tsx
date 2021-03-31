import state, {addMessage, addPost, RootStateType, updateNewMessage, updateNewPostText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


 const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                dialogPage={state.dialogPage}
                profilePage={state.profilePage}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPost={updateNewPostText}
                updateNewMessage={updateNewMessage}
            />
        </BrowserRouter>
        , document.getElementById('root'))
}




 rerenderEntireTree(state)




