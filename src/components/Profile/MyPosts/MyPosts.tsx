import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import { addPostActionCreator, UpdateNewPostActionCreator} from "../../../redux/profile-reducer";
import {ActionsTypes, PostsType} from "../../../redux/state";


type MyPostsPageType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


function MyPosts(props: MyPostsPageType) {
    const postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
        props.dispatch(UpdateNewPostActionCreator(''))
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewPostActionCreator(e.currentTarget.value))
    }

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