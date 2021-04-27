import {ActionsTypes} from "./store";



type DialogPageType={
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



let initialState: DialogPageType = {
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


const dialogReducer = (state=initialState , action: ActionsTypes):DialogPageType  => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessagesType = {
                id: 3,
                message: action.message,
            }
            state.messages.push(newMessage)
            return state
        case 'UPDATE-NEW-MESSAGE':
            state.newMessage = action.newMessage
            return state
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