import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import {DialogPageType} from '../../redux/dialogs-reducer';


type DialogPageTypes = {
    dialogPage: DialogPageType
    addMessage:(event: any) => void
    updateNewMessageText: (text: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function Dialogs(props: DialogPageTypes) {
    const dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

    const onAddMessage = (event: any) => {
        props.addMessage(event)
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