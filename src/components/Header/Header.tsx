import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';


type HeaderPropsType={
    isAuth:boolean
    login:string
    logout:()=>void
}


const Header = (props:HeaderPropsType) =>{
    return(
        <header className={s.header}>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons-for-free.com%2Fmix%2Bmixed%2Brandom%2Bshuffle%2Bicon-1320085966913294038%2F&psig=AOvVaw26CQP1jWlEbOukSSjSs2QB&ust=1615452228072000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjD7tCqpe8CFQAAAAAdAAAAABAJ' />
       <div className={s.loginBlock}>
           {props.isAuth
               ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                :<NavLink to='/login'>
                LOGIN
            </NavLink>}
       </div>
        </header>
    )
}




export default Header;