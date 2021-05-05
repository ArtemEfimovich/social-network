import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {FollowAC, SetUsersAC, UnfollowAC, UsersPageType, UsersType} from "../../redux/users-reducer";
import Users from "./Users";


type MapStatePropsType = {
    users: Array<UsersType>
}

type MapDispatchToPropsType = {
    follow:(userId: number)=>void
    unFollow:(userId: number)=>void
    setUsers:(users: Array<UsersType>)=>void
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(UnfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(SetUsersAC(users))

        }


    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer

