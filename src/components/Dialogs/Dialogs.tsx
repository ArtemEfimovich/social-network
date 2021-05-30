import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {Redirect} from "react-router-dom";


type DialogPageTypes = {
    dialogPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (text: React.ChangeEvent<HTMLTextAreaElement>) => void
    isAuth:boolean
}

function Dialogs(props: DialogPageTypes) {
    const dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

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
                <textarea onChange={onAddChange} value={props.dialogPage.newMessage}/>
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