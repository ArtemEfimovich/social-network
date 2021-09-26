import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import userPhoto from "../../assets/image/image.png"
import {NavLink} from "react-router-dom";


export type UserPageType = {
    user: UsersType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: Array<number>
}


function User(
    {
        user,
        follow,
        unFollow,
        followingInProgress
    }: UserPageType) {

    return (
        <div>
            <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}
                            alt={'small'}
                            />
                        </NavLink>
                    </div>
                    <div>{user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {unFollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {{follow(user.id)}
                                  }}>Follow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>
        </div>
    )
}


export default User;