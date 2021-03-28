import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {ProfilePageType} from "../../../redux/state";





function MyPosts(props: ProfilePageType) {
    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let addPost = () => {
        //let text = newPostElement.current?.value ;
        if (newPostElement.current) {
            props.addPostCallback(newPostElement.current.value);
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts