import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {getUserData} from "./auth-reducer";

type ActionsTypes = ReturnType<typeof setInitialized>


export type AppType = {
    initialized:boolean
}


let initialState:  AppType = {
    initialized: false,

}

export const appReducer = (state:  AppType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,
                initialized:true
            }
        default:
            return state
    }
}


export const setInitialized = () => {
    return {
        type: 'SET_INITIALIZED',
    } as const
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<any>

export const initializeApp = () => {
    return (dispatch: DispatchType, getState: GetStateType) => {
       dispatch(getUserData())
       dispatch(setInitialized())
        }
}





export default appReducer;