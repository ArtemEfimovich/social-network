import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>



export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
    status: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotoType
    userId: number
}

type ContactsType = {
    facebook: string
    github: string
    instagram: string
}
type PhotoType = {
    small: string
    large: string
}


let initialState: ProfilePageType = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 15},
        {id: 1, message: "It's my first post", likesCount: 17}
    ],
    newPostText: "cdscdscsdc",
    profile: null,
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.postMessage, likesCount: 0}]
            }
        case 'UPDATE-NEW-POST':
            return {
                ...state,
                newPostText: action.newPostText
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status:action.status
            }
        default:
            return state

    }

}


export const addPost = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage
    } as const
}

export const updateNewPost = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        newPostText
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>

export const getUserProfile = (userId: number) => {
    return (dispatch: DispatchType, getStateType: GetStateType) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: DispatchType, getStateType: GetStateType) => {
        profileApi.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: DispatchType, getStateType: GetStateType) => {
        profileApi.updateStatus(status).then(data=> {
            if(data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReducer;