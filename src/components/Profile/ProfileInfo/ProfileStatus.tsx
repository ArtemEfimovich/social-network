import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {NavLink} from 'react-router-dom';

type ProfileStatusType = {
    status: string;
    updateStatus: (status: string) => void
}


class ProfileStatus extends React.Component<ProfileStatusType>{

    state={
        editMode: false,
        status:this.props.status
    }

    activateEditMode=()=>{
        this.setState({ editMode: true });
    }
    deActivateEditMode=()=>{
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value

        })

    }

render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;