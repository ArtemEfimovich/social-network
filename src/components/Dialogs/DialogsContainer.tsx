import React, {ChangeEvent} from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"

import {
    AddMessageActionCreator,
    UpdateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import {ActionsTypes, DialogsType, MessagesType, StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

type DialogPageType = {
    store: StoreType
}

function DialogsContainer(props: DialogPageType) {
    let state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(AddMessageActionCreator(state.dialogPage.newMessage))
        props.store.dispatch(UpdateNewMessageActionCreator(''))
    }

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(UpdateNewMessageActionCreator(e.currentTarget.value))
    }


    return (
        <Dialogs
            addMessage={addMessage}
            updateNewMessageText={newMessageChangeHandler}
            dialogs={state.dialogPage.dialogs}
            messages={state.dialogPage.messages}
            newMessage={state.dialogPage.newMessage}
        />
    )
}


export default DialogsContainer