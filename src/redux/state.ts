let rerenderEntireTree=(state:RootStateType)=>{
}

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


let state: RootStateType = {
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
}


export const addPost = (postMessage: string) => {
    const newPost: PostsType = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const addMessage = (Message: string) => {
    const newMessage: MessagesType = {
        id: 3,
        message: Message,
    }
    state.dialogPage.messages.push(newMessage)
    rerenderEntireTree(state)
}


export const updateNewMessage = (newMessage: string) => {
    state.dialogPage.newMessage = newMessage
    rerenderEntireTree(state)
}


export default state;