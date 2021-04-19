import React, {ChangeEvent} from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"

import {
    AddMessageActionCreator,
    UpdateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import {ActionsTypes, DialogsType, MessagesType} from "../../redux/state";

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    dispatch:(action:ActionsTypes)=>void
}

function Dialogs(props: DialogPageType) {
    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    const addMessage = () => {
        props.dispatch(AddMessageActionCreator(props.newMessageText))
        props.dispatch(UpdateNewMessageActionCreator(''))
    }

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        props.dispatch(UpdateNewMessageActionCreator(e.currentTarget.value))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={newMessageChangeHandler}/>
            </div>
            <div>
                <button onClick={addMessage}>
                    Send
                </button>
            </div>

        </div>
    )
}


export default Dialogs