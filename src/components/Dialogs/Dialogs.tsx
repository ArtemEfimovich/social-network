import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import {DialogsPageType} from '../../redux/dialogs-reducer';
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {TextArea} from "../common/FormsControls/TextArea";
import {maxLengthCreator, required} from "../../utils/validators/validators";


type DialogPageTypes = {
    sendMessage: (message: string) => void
    dialogPage: DialogsPageType
    isAuth: boolean
}


const maxLength = maxLengthCreator(200)

const Dialogs = (props: DialogPageTypes) => {
    const dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    const messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);


    if (props.isAuth) return <Redirect to={"/login"}/>


    let onSendMessageClick = (message: string) => {
        props.sendMessage(message)
    }


    let addNewMessage = (values: any) => {
        onSendMessageClick(values.newMessageBody)

    }


    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}


const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name='newMessageBody' placeholder='Enter your message'
                        validate={[required,maxLength]}
                />
            </div>
            <div>
                <button>
                    Send
                </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs