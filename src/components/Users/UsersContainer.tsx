import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUserCountAC,
    SetUsersAC,
    UnfollowAC,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";


type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount:number
    currentPage:number
}

type MapDispatchToPropsType = {
    follow:(userId: number)=>void
    unFollow:(userId: number)=>void
    setUsers:(users: Array<UsersType>)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUserCount:(totalCount:number)=>void
}

type UserPageType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    pageSize: number
    totalUserCount:number
    currentPage:number
    setCurrentPage:(currentPage: number)=>void
    setTotalUserCount:(totalCount: number)=>void
}


class UsersContainer extends React.Component<UserPageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }


    onPageChanged=(pageNumber: number) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users
            onPageChanged={this.onPageChanged}
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}/>
    }

};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage:state.usersPage.currentPage
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
        },
        setCurrentPage:(currentPage: number)=>{
            dispatch(SetCurrentPageAC(currentPage))
        },
        setTotalUserCount:(totalCount: number)=>{
            dispatch(SetTotalUserCountAC(totalCount))
        }


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



