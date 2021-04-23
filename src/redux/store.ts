import profileReducer, {addPostActionCreator, UpdateNewPostActionCreator} from "./profile-reducer";
import dialogReducer, {AddMessageActionCreator, UpdateNewMessageActionCreator} from "./dialogs-reducer";

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
        this._state = profileReducer(this._state, action)
        this._state= dialogReducer(this._state,action)
        this._callSubscriber(this._state)

    }
}


export default store;