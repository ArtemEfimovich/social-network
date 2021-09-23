import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


type AppProps=MapDispatchPropsType & MapStateToPropsType

type MapDispatchPropsType ={
    initializeApp:()=>void
}
type MapStateToPropsType = {
    initialized:boolean
}


class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized)
        return <Preloader/>

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const MapStateToProps = (state:AppStateType)=>({
    initialized: state.app.initialized
})



export default connect(MapStateToProps,{initializeApp})(App);



