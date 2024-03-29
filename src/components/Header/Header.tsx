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
            <img src='https://cryptologos.cc/logos/aeternity-ae-logo.png'
                alt={'logo'}
            />
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