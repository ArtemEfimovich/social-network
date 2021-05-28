import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {DataType, getUserData, setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {usersApi} from "../../api/api";


type HeaderContainerProps=MapDispatchPropsType & MapStateToPropsType

type MapStateToPropsType ={
    isAuth: boolean
    login:string

}
type MapDispatchPropsType={
    getUserData:()=>void
}


class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
       this.props.getUserData()
    }

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



export default  connect(MapStateToProps,{getUserData})(HeaderContainer);