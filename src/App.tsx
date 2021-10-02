import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


type AppProps = MapDispatchPropsType & MapStateToPropsType

type MapDispatchPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}


class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized)
            return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => {
                               return <React.Suspense fallback={<Preloader/>}>
                                   <DialogsContainer/>
                               </React.Suspense>
                           }}/>
                    <Route path="/profile/:userId?" render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <ProfileContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})


export default connect(MapStateToProps, {initializeApp})(App);



