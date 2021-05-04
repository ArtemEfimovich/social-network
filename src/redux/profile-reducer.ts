import {ActionsTypes} from "./store";


export type ProfilePageType ={
    posts: Array<PostsType>
    newPostText: string
}

export type PostsType ={
    id: number
    message: string
    likesCount: number
}



let initialState: ProfilePageType= {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 15},
        {id: 1, message: "It's my first post", likesCount: 17}
    ],
    newPostText: ""
}

const profileReducer = (state: ProfilePageType = initialState , action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            return{
                ...state,
                newPostText: "",
                posts: [...state.posts,{id: 3, message: action.postMessage, likesCount: 0} ]
            }
        case 'UPDATE-NEW-POST':
            return{
                ...state,
                newPostText: action.newText
            }
        default:
            return state

    }

}



export const addPostActionCreator = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const UpdateNewPostActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        newText: newText
    } as const
}


export default profileReducer;