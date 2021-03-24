import React from "react";
import s from "./Posts.module.css"
import {PostsType} from "../../../../redux/state";





function Post (props:PostsType){
    return(
        <div className={s.item}>
            <img src={'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'}/>
            {props.message}
            <div>
                <span>Like</span>{props.likesCount}
            </div>
        </div>
    )
}



export default Post;