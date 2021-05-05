import {ActionsTypes} from "./store";


export type UsersPageType={
    users:Array<UsersType>
}

export type UsersType={
    id: number
    photos:PhotosType
    followed: boolean
    name: string
    status: string
    location:  LocationType
}

type PhotosType={
    small: string
    large: string
}
type LocationType={
    city: string
    country: string
}


let initialState:UsersPageType= {
    users: []
}

export const usersReducer = (state:UsersPageType = initialState , action: ActionsTypes):UsersPageType => {

        switch (action.type) {
            case "FOLLOW":
                return {
                    ...state,
                    users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
                }
            case "UNFOLLOW":
                return {
                    ...state,
                    users:state.users.map(u=>u.id === action.userId ? {...u,followed:false} : u)
                }
            case "SET_USERS":
                return {
                    ...state,
                    users: [...state.users, ...action.users]
                }
            default:
                return state
        }
}



export const FollowAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}

export const UnfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const SetUsersAC = (users:Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}


export default usersReducer;