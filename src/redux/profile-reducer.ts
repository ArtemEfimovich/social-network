import {ActionsTypes, PostsType, RootStateType} from "./state";


const profileReducer = (state:RootStateType, action:ActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: 3,
                message: action.postMessage,
                likesCount: 0
            }
            state.profilePage.posts.push(newPost)
            return state
        case 'UPDATE-NEW-POST':
            state.profilePage.newPostText = action.newText
            return state
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