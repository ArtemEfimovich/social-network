import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostsType} from "../../../redux/state";


type MyPostsPageType = {
    posts: Array<PostsType>
    addPost: (message: string) => void
    newPostText: string
    updateNewPost: (newText: string) => void
}


function MyPosts(props: MyPostsPageType) {
    const postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPost = () => {
        props.addPost(props.newPostText);
        props.updateNewPost ("")

    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateNewPost(e.currentTarget.value)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={newTextChangeHandler}/>
                </div>
                <div>

                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts