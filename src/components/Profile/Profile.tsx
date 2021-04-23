import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redux/store";


type ProfilePageType = {
    posts: Array<PostsType>
    newPostText:string
    dispatch:(action:ActionsTypes)=>void
}


function Profile(props: ProfilePageType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}

            />
        </div>
    )
}


export default Profile;