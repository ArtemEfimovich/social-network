import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";


type ProfilePageType = {
    posts: Array<PostsType>
    addPost: (message: string) => void
    newPostText:string
    updateNewPost:(newText: string)=> void
}


function Profile(props: ProfilePageType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPost={props.updateNewPost}
            />
        </div>
    )
}


export default Profile;