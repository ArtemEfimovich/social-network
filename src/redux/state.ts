import {act} from "react-dom/test-utils";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string

}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}


type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    Message: string
}
type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE'
    newMessage: string
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof UpdateNewPostActionCreator>
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof UpdateNewMessageActionCreator>


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

export const AddMessageActionCreator =(message: string) =>{
    return{
        type:'ADD-MESSAGE',
        message:message
    }as const
}

export const UpdateNewMessageActionCreator = (newMessage: string) =>{
    return{
        type: 'UPDATE-NEW-MESSAGE',
        newMessage:newMessage
    }as const
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how are you?', likesCount: 15},
                {id: 1, message: "It's my first post", likesCount: 17}
            ],
            newPostText: ""
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Artem'},
                {id: 3, name: 'Roman'},
                {id: 4, name: 'Vadim'},
                {id: 5, name: 'Vladimir'},
                {id: 6, name: 'Maria'}
            ],
            messages: [
                {id: 0, message: "Hi."},
                {id: 1, message: "I'am fine"},
                {id: 2, message: "How are you?"}],
            newMessage: "",
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: 3,
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessagesType = {
                id: 3,
                message: action.message,
            }
            this._state.dialogPage.messages.push(newMessage)
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogPage.newMessage = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}


export default store;