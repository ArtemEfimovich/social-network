import React, {ChangeEvent} from "react";
import {addPostActionCreator, ProfilePageType, UpdateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {PostsType} from "../../../redux/store";


type MapStatePropsType={
    profilePage: ProfilePageType
}


type MapDispatchToPropsType = {
    addPost: (postMessage: string) => void
    updateNewPostText:(newText: string)=>void
}





const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (postMessage: string) => {
            dispatch(addPostActionCreator(postMessage))
        },
        updateNewPostText: (newText: string) => {
            dispatch(UpdateNewPostActionCreator(newText))
        }
    }
}

// @ts-ignore
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer