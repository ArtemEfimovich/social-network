import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, setCurrentPage, unFollow, UsersType} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUser
} from "../../redux/users-selectors";


type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type UserPageType = MapDispatchPropsType & MapStatePropsType

class UsersContainer extends React.Component<UserPageType> {

    componentDidMount() {
        const {currentPage, pageSize}=this.props;
        this.props.getUsers(currentPage,pageSize)
    }


    onPageChanged = (pageNumber: number) => {
        const {pageSize}=this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}



export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        getUsers
    })
)(UsersContainer)



