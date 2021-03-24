import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () =>{
    return(
        <nav className={s.nav}>
            <div className={s.item}>
               <NavLink to="/Profile" >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs">Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News"> News</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to="/Music">Music</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to="/Settings">Settings</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to="/Sidebar">Friends</NavLink>

            </div>
        </nav>
    )
}



export default Navbar;
