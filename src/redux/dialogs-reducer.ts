import {ActionsTypes, MessagesType, RootStateType} from "./state";


const dialogReducer = (state: RootStateType, action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessagesType = {
                id: 3,
                message: action.message,
            }
            state.dialogPage.messages.push(newMessage)
            return state
        case 'UPDATE-NEW-MESSAGE':
            state.dialogPage.newMessage = action.newMessage
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