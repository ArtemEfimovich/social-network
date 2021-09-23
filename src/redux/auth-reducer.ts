import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {authApi, LoginParamsType, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

type ActionsTypes = ReturnType<typeof setUserData>


export type AuthType = {
    userId: number | null;
    email: string |null;
    isAuth: boolean;
    login: string
}


let initialState: AuthType = {
    userId: null,
    email: null,
    isAuth: false,
    login: ''
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


export const setUserData = (userId :number, email:string,login:string, isAuth:boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload:{userId,email,login,isAuth}
    } as const
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<any>

export const getUserData = () => {
    return (dispatch: DispatchType, getState: GetStateType) => {
       return authApi.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email,login} = data.data
                dispatch(setUserData(id, email,login,true))
            }
        })
    }
}

export const login = (email:string, password:string,rememberMe:boolean) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        authApi.login(email,password,rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getUserData())
            }else {
                let message = res.data.messages.length > 0 ? res.data.messages[0]: "some error"
                dispatch(stopSubmit("login", {_error:message}))
            }
        })
    }
}


export const logout = () => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        authApi.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(0,'','',false))
            }
        })
    }
}







export default authReducer;