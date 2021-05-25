import React from "react";
import s from "./Posts.module.css"


type PostsPropsType={
    id:number
    message: string
    likesCount:number
}

function Post (props:PostsPropsType){
    return(
        <div className={s.item}>
            <img src={"https://i.redd.it/z394307odi741.png"} alt={"https://i.redd.it/z394307odi741.png"}/>
            {props.message}
            <div>
                <span>Like</span>{props.likesCount}
            </div>
        </div>
    )
}



export default Post;