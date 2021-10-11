import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/image/image.png"
import s from "./ProfileInfo.module.css"
import ProfileDataForm from "./ProfileDataForm";


export type ProfileInfoType = {
    isOwner: boolean
    profile: any
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photo: string) => void
    saveProfile:(profile: any)=>void
}


const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelectedOn = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData:any)=>{
        props.saveProfile(formData)
        setEditMode(false)
    }




    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto}
                     className={s.profileImg}
                />
                {props.isOwner && <input type={'file'} onChange={mainPhotoSelectedOn}/>}
            </div>
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                {editMode ?
                    <ProfileDataForm
                        initialValues={props.profile}
                        onSubmit={onSubmit}/>
                    : <ProfileData
                    profile={props.profile}
                    isOwner={props.isOwner}
                    setEditMode={()=>{setEditMode(true)}}/>}

            </div>
        </div>
        
)
}





const ProfileData = (props: any) => {
    return <div>
        {props.isOwner && <div><button onClick={props.setEditMode}>edit</button></div>}
        <div>
            Full name: {props.profile.fullName}
        </div>
        <div>
            Looking for a job :{props.profile.lookingForAJob ? 'yes' : 'no'}
            {props.profile.lookingForAJob &&
            <div>
                Skills : {props.profile.lookingForAJobDescription}
            </div>}
        </div>
        <div>
            About me:{props.profile.aboutMe}
        </div>
        <div>
            Contacts : {Object.keys(props.profile.contacts).map(key => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}
export const  Contacts = ({contactTitle, contactValue}: any) => {
    return <div className={s.contacts}>
        {contactTitle} : {contactValue}
    </div>
}

export default ProfileInfo;