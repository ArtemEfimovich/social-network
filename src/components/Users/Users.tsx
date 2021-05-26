import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import userPhoto from "../../assets/image/image.png"
import {NavLink} from "react-router-dom";
import axios from "axios";


export type UserPageType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (page: number) => void
    totalUserCount: number
    pageSize: number
    currentPage: number
}


function Users(props: UserPageType) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            <div>
                {pages.map(p => {
                    // @ts-ignore
                    return <span key={p.id} className={props.currentPage === p && s.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                        <div>{u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "369a3457-d3e2-4331-b490-319ddee29442"}
                                    }
                                ).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unFollow(u.id)
                                    }
                                })


                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {"API-KEY": "369a3457-d3e2-4331-b490-319ddee29442"}
                                    }
                                ).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })
                            }}>Follow</button>}</div>
                                </span>
                    <span>
                                <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                </span>
                                <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                                </span>
                                </span>
                </div>
            )
            }
        </div>
    )

}


export default Users;