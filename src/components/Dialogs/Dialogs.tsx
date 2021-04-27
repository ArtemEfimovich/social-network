import React, {ChangeEvent} from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"

import {
    AddMessageActionCreator,
    UpdateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import {ActionsTypes, DialogsType, MessagesType, StoreType} from "../../redux/store";

type DialogPageType = {

    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
   addMessage:()=>void
    updateNewMessageText:(text:React.ChangeEvent<HTMLTextAreaElement>)=>void
}

function Dialogs(props: DialogPageType) {
    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    const onAddMessage = () => {
        props.addMessage()
    }

    const onAddChange = (text: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(text)
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
                <textarea onChange={onAddChange} value={props.newMessage}/>
            </div>
            <div>
                <button onClick={onAddMessage}>
                    Send
                </button>
            </div>

        </div>
    )
}


export default Dialogs