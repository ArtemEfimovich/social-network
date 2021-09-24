import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: any
    status:string
    updateStatus: (status: string) => void
}


const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
           {/* <div className={s.img}>
                <img
                    src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80"/>
            </div>*/}
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                <ProfileStatusWithHooks status={props.status}
                updateStatus={props.updateStatus}
                />
            </div>
            <div>
                {props.profile.fullName}
                {props.profile.contacts.github}
                {props.profile.lookingForAJobDescription}
            </div>
            <div>
                {props.profile.contacts.vk}
            </div>

        </div>
    )
}


export default ProfileInfo;