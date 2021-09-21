import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type HeaderContainerProps=MapDispatchPropsType & MapStateToPropsType

type MapStateToPropsType ={
    isAuth: boolean
    login:string

}
type MapDispatchPropsType={
    logout:()=>void
}


class HeaderContainer extends React.Component<HeaderContainerProps> {
    render() {

        return (
            <Header {...this.props}/>
        )
    }
}

const MapStateToProps=(state: AppStateType):MapStateToPropsType=>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
}



export default  connect(MapStateToProps,{logout})(HeaderContainer);