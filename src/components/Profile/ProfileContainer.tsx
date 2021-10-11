import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: any
}
type MapStatePropsType = {
    profile: any
    status: string
    authorizedUserId:number | null
    isAuth:boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto:(photo:string)=>void
    saveProfile: (profile:any)=>void
}
type ProfileContainerPropsType = MapDispatchPropsType & MapStatePropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps:PropsType,prevState:AppStateType,snapshot:any)  {
        if(this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()
    }



    render() {

        return (
            <Profile
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto,saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
