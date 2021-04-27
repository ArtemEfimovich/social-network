import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
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