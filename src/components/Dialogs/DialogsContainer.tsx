import React from 'react';
import {AddMessageActionCreator, DialogsPageType} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose, Dispatch} from 'redux';
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType={
    dialogPage: DialogsPageType

}
type MapDispatchPropsType= {
    sendMessage: (message: string) => void
}


const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,

    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {

        sendMessage: (message: string) => {
            dispatch(AddMessageActionCreator(message))
        },

    }
}



const DialogsContainer =compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)

export default DialogsContainer