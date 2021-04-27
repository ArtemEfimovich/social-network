import React, {ChangeEvent} from 'react';
import {AddMessageActionCreator, DialogPageType, UpdateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from 'redux';


type MapStatePropsType={
    dialogPage: DialogPageType
}
type MapDispatchPropsType={
    addMessage: (message: string)=>void
    updateNewMessageText:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}


const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {

        addMessage: (message:string) => {
            dispatch(AddMessageActionCreator(message))
            dispatch(UpdateNewMessageActionCreator(''))
        },
        updateNewMessageText: (text: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(UpdateNewMessageActionCreator(text.currentTarget.value))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer