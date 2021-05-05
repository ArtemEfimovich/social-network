import React from 'react';
import s from './ProfileInfo.module.css'






const ProfileInfo = () =>{
    return(
        <div>
            <div className={s.img}>
                <img src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80" />
            </div>
            <div>
                ava+description
            </div>
        </div>
    )
}








export default ProfileInfo;