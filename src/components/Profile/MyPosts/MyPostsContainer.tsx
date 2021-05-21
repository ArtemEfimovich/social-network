import React, {ChangeEvent} from "react";
import {addPostActionCreator, ProfilePageType, UpdateNewPostActionCreator} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import MyPostsC from "./MyPostsC";


type MapStatePropsType = {
    profilePage: ProfilePageType
}


type MapDispatchToPropsType = {
    addPost: (postMessage: string) => void
    updateNewPostText: (text: ChangeEvent<HTMLTextAreaElement>) => void
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (postMessage: string) => {
            dispatch(addPostActionCreator(postMessage))
            dispatch(UpdateNewPostActionCreator(''))
        },
        updateNewPostText: (text: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(UpdateNewPostActionCreator(text.currentTarget.value))
        }
    }
}




// @ts-ignore
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsC)

export default MyPostsContainer