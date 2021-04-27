import React, {ChangeEvent} from "react";
import {addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, PostsType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";


type MyPostsPageType = {
    store:StoreType
}


function MyPostsContainer(props: MyPostsPageType) {
    const state= props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
        props.store.dispatch(UpdateNewPostActionCreator(''))
    }

    const newTextChangeHandler = (text: ChangeEvent<HTMLTextAreaElement>) => {
        let action = UpdateNewPostActionCreator(text.currentTarget.value)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={newTextChangeHandler}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}


export default MyPostsContainer