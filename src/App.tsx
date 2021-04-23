import React from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogPageType, ProfilePageType, StoreType, ActionsTypes} from "./redux/store";


type RootStateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


function App(props: RootStateType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogs={props.dialogPage.dialogs}
                        messages={props.dialogPage.messages}
                        dispatch={props.dispatch}
                        newMessageText={props.dialogPage.newMessage}
                    />}/>
                    <Route path="/profile" render={() => <Profile
                        posts={props.profilePage.posts}
                        dispatch={props.dispatch}
                        newPostText={props.profilePage.newPostText}
                    />}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/sidebar" render={() => <Sidebar/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;



