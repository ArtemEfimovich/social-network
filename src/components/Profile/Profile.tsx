import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePageType = {

}

function Profile(props: ProfilePageType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;