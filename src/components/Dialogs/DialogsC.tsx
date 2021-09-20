import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import {DialogsPageType} from '../../redux/dialogs-reducer';


type DialogPageTypes = {
    dialogPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}


class DialogsC extends React.Component<DialogPageTypes> {
     dialogsElements = this.props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
     messagesElements = this.props.dialogPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);

     onAddMessage = () => {
         this.props.addMessage()
    }

     onAddChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
         const text = e.currentTarget.value
         this.props.updateNewMessageText(text)
    }



    render() {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {this.dialogsElements}
                </div>
                <div className={s.messages}>
                    {this.messagesElements}
                </div>
                <div>
                    <textarea onChange={this.onAddChange} value={this.props.dialogPage.newMessage}/>
                </div>
                <div>
                    <button onClick={this.onAddMessage}>
                        Send
                    </button>
                </div>

            </div>
        )
    }
}



export default DialogsC;
