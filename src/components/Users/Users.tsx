import React from "react";
import {UsersType} from "../../redux/users-reducer";
import s from "./Users.module.css"

type UserPageType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}


function Users(props: UserPageType) {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 0,
                    photoURL: "https://i.redd.it/z394307odi741.png",
                    followed: true,
                    fullName: 'Dmitriy',
                    status: "I am a boss",
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 1,
                    photoURL: "https://i.redd.it/z394307odi741.png",
                    followed: false,
                    fullName: 'Artem',
                    status: "React learning",
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoURL: "https://i.redd.it/z394307odi741.png",
                    followed: true,
                    fullName: 'Roman',
                    status: "I am technology ",
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoURL: "https://i.redd.it/z394307odi741.png",
                    followed: true,
                    fullName: 'Evgeniy',
                    status: "I am a boss",
                    location: {city: 'New York', country: 'United State'}
                },
                {
                    id: 4,
                    photoURL: "https://i.redd.it/z394307odi741.png",
                    followed: false,
                    fullName: 'Ann',
                    status: "I am a boss",
                    location: {city: 'Grodno', country: 'Belarus'}
                },
            ]
        )
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoURL} className={s.userPhoto}/></div>
                        <div>{u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}</div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
            )
            }
        </div>
    )
}


export default Users;