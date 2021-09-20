import React from "react";
import {addPost, ProfilePageType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


type MapStatePropsType = {
    profilePage: ProfilePageType

}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}




export default connect(mapStateToProps, {addPost})(MyPosts)
