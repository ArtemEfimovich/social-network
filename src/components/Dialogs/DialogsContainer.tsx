import React, {ChangeEvent} from 'react';
import {AddMessageActionCreator, DialogsPageType, UpdateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from 'redux';
import DialogsC from "./DialogsC";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType={
    dialogPage: DialogsPageType

}
type MapDispatchPropsType={
    addMessage: (message: string) => void
    updateNewMessageText:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}


const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,

    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {

        addMessage: (message: string) => {
            dispatch(AddMessageActionCreator(message))
            dispatch(UpdateNewMessageActionCreator(''))
        },
        updateNewMessageText: (text: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(UpdateNewMessageActionCreator(text.currentTarget.value))
        }
    }
}




// @ts-ignore
const DialogsContainer =compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsC)

export default DialogsContainer