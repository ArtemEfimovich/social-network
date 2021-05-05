import {ActionsTypes} from "./store";


export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string

}


let initialState: DialogsPageType = {
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
}


const dialogReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            return{
                ...state,
                messages: [...state.messages, { id: 3, message: action.message}]
            }

        case 'UPDATE-NEW-MESSAGE':
            return {
                ...state,
                newMessage: action.newMessage
        }

        default:
            return state
    }


}


export const AddMessageActionCreator = (message: string) => {
    return {
        type: 'ADD-MESSAGE',
        message: message
    } as const
}

export const UpdateNewMessageActionCreator = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newMessage: newMessage
    } as const
}


export default dialogReducer;