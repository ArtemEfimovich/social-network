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
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type RootStateType = {
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}


function App(props: RootStateType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <DialogsContainer
                       store={props.store}
                    />}/>
                    <Route path="/profile" render={() => <Profile
                        store={props.store}
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



