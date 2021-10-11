import React, {useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string;
    updateStatus: (status: string) => void
}


const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])



    const activateEditMode = () => setEditMode(true)

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }

    const onStatusChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }



    return (
        <div>
            {!editMode &&
            <div>
                Status :<span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input  onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;