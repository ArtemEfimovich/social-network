import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {authApi, usersApi} from "../api/api";

type ActionsTypes = ReturnType<typeof setUserData>


export type AuthType = {
    userId: number
    email: string
    isAuth: boolean
    login: string
}

export type DataType = {
    id: number
    email: string
    login: string
}


let initialState: AuthType = {
    userId: 2,
    email: 'bla@bla.bla',
    isAuth: false,
    login: ''
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setUserData = (data: DataType,) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>

export const getUserData = () => {
    return (dispatch: DispatchType, getState: GetStateType) => {
        authApi.getAuth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
        })
    }
}


export default authReducer;