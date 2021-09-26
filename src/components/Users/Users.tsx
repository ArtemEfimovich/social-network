import React from "react";
import {UsersType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


export type UserPageType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (page: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
}


function Users(
    {
        users,
        follow,
        unFollow,
        onPageChanged,
        totalUserCount,
        pageSize,
        currentPage,
        followingInProgress
    }: UserPageType) {

    return (

        <div>
            <Paginator currentPage={currentPage}
                       totalUserCount={totalUserCount}
                       pageSize={pageSize}
                       onPageChanged={onPageChanged}/>
            <div>
                {users.map(u => <User user={u} key={u.id}
                                      follow={follow}
                                      unFollow={unFollow}
                                      followingInProgress={followingInProgress}/>)}
            </div>

        </div>
    )

}


export default Users;