import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";




function Profile (props:ProfilePageType) {
    return(
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )
}







export default Profile;