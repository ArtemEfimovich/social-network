import React, {useState} from 'react';

type ProfileStatusType = {
    status: string;
    updateStatus: (status: string) => void
}


const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    const activateEditMode = () => setEditMode(true)

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }

    const onStatusChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }


   /* if(prevProps.status !== this.props.status)*/

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
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