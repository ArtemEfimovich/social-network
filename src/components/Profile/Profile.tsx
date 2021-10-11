import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    isOwner:boolean
    profile: any
    status: string
    updateStatus: (status: string) => void
    savePhoto:(photo:string)=>void
    saveProfile: (profile: any)=>void
}


function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo
                        savePhoto={props.savePhoto}
                        isOwner={props.isOwner}
                        profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                        saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;