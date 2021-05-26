import {ActionsTypes} from "./store";


export type AuthType = {
    userId:number
    email:string
    isAuth:boolean
    login:string
}

export type DataType={
   id:number
    email:string
    login:string
}


let initialState: AuthType = {
    userId:2,
    email:'bla@bla.bla',
    isAuth:false,
    login:''
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}


export const setUserData = (data: DataType) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}



export default authReducer;