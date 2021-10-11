import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

type ActionsTypes = ReturnType<typeof setUserData>
| ReturnType<typeof getCaptchaUrlSuccess>


export type AuthType = {
    userId: number;
    email: string | null;
    isAuth: boolean;
    login: string
    captchaUrl:string |null
}


let initialState: AuthType = {
    userId: 0,
    email: null,
    isAuth: false,
    login: '',
    captchaUrl: null
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        case "GET_CAPTCHA_URL":
            return{
                ...state,captchaUrl:action.captchaUrl
            }
        default:
            return state
    }
}


export const setUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {userId, email, login, isAuth}
    } as const
}


export const getCaptchaUrlSuccess = (captchaUrl:string)=>{
    return{
        type:'GET_CAPTCHA_URL',
        captchaUrl
    }as const
}


type GetStateType = () => AppStateType
type DispatchType = Dispatch<any>

export const getUserData = () => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        return authApi.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        authApi.login(email, password, rememberMe).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getUserData())
            } else {
                if (res.data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}


export const logout = () => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        authApi.logout().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(0, '', '', false))
            }
        })
    }
}


export const getCaptchaUrl = () => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        securityApi.getCaptchaUrl().then(data => {
                const captchaUrl = data.data.url
                dispatch(getCaptchaUrlSuccess(captchaUrl))
            }
        )
    }
}

export default authReducer;