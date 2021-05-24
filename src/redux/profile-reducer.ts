import {ActionsTypes} from "./store";


export type ProfilePageType ={
    posts: Array<PostsType>
    newPostText: string
    profile:Array<ProfileType>
}

export type PostsType ={
    id: number
    message: string
    likesCount: number
}
export type ProfileType={
   photos:PhotoType
}

type PhotoType ={
    small:string
    large:string
}


let initialState: ProfilePageType= {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 15},
        {id: 1, message: "It's my first post", likesCount: 17}
    ],
    newPostText: "cdscdscsdc",
    profile: []
}

const profileReducer = (state: ProfilePageType = initialState , action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            return{
                ...state,
                posts: [...state.posts,{id: 3, message: action.postMessage, likesCount: 0} ]
            }
        case 'UPDATE-NEW-POST':
            return{
                ...state,
                newPostText: action.newPostText
            }
        case 'SET-USER-PROFILE':
        return {
            ...state,
            profile: [...action.profile]
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

export const setUserProfile = (profile:Array<ProfileType>)=>{
    return{
        type: 'SET-USER-PROFILE',
        profile
    }as const
}


export default profileReducer;