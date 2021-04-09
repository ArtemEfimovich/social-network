

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


export type StoreType = {
    _state: RootStateType
    addPost: (postMessage: string)=>void
    updateNewPostText:(newText: string) => void
    addMessage:(Message: string) => void
    updateNewMessage:(newMessage: string) => void
    subscribe:(observer: () => void)=>void
    _rerenderEntireTree:()=>void
    getState:()=>RootStateType
}


let store:StoreType = {
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
    addPost(postMessage: string) {
        const newPost: PostsType = {
            id: 3,
            message: postMessage,
            likesCount: 0
        }
            this._state.profilePage.posts.push(newPost)
        this._rerenderEntireTree()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    addMessage(Message: string) {
        const newMessage: MessagesType = {
            id: 3,
            message: Message,
        }
        this._state.dialogPage.messages.push(newMessage)
        this._rerenderEntireTree()
    },
    updateNewMessage(newMessage: string) {
        this._state.dialogPage.newMessage = newMessage
        this._rerenderEntireTree()
    },
    _rerenderEntireTree(){
        console.log('state changed')
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    }

}



export default store;