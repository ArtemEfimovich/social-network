import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";



type mapStatePropsType={
    isAuth:boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export function withAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStatePropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth)
            return <Redirect to={'/login'} />

        return <Component  {...restProps as T}/>

    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}