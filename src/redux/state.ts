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
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}



let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 0, message: 'Hi, how are you?', likesCount: 15},
            {id: 1, message: "It's my first post", likesCount: 17}
        ],
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
    },
}


export default state;