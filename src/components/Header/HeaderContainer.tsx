import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DataType, setUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type HeaderContainerProps=MapDispatchPropsType & MapStateToPropsType

type MapStateToPropsType ={
    isAuth: boolean
    login:string

}
type MapDispatchPropsType={
    setUserData: (data: DataType,email: string,login: string)=>void
}


class HeaderContainer extends React.Component<HeaderContainerProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(email, id, login)
            }
        })
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



export default  connect(MapStateToProps,{setUserData})(HeaderContainer);