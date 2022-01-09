import {AppStateType} from "./redux-store";
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


export const initializeApp = () => {
    return (dispatch:any,getState:GetStateType) => {
        let promise = dispatch(getUserData())
        Promise.all([promise]).then(() => {
            dispatch(setInitialized())
        })
    }
}


export default appReducer;
