import React, {ChangeEvent} from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import {DialogsType, MessagesType} from "../../redux/state";

type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
    addMessage: (message: string) => void
    updateNewMessage: (newMessage: string) => void
}

function Dialogs(props: DialogPageType) {
    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    const addMessage = () => {
        props.addMessage(props.newMessageText)
        props.updateNewMessage("")
    }

    const newMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewMessage(e.currentTarget.value);


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