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
            const newPost: PostsType = {
                id: 3,
                message: action.postMessage,
                likesCount: 0
            }
            state.posts.push(newPost)
            return state
        case 'UPDATE-NEW-POST':
            state.newPostText = action.newText
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