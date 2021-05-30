import React from "react";
import {addPost, ProfilePageType, updateNewPost} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import MyPostsC from "./MyPostsC";


type MapStatePropsType = {
    profilePage: ProfilePageType

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}




// @ts-ignore
export default connect(mapStateToProps, {addPost,updateNewPost})(MyPostsC)
