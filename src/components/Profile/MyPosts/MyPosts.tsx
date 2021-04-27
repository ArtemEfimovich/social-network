import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {UpdateNewPostActionCreator} from "../../../redux/profile-reducer";
import {PostsType} from "../../../redux/store";


type MyPostsPageType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText:(text:React.ChangeEvent<HTMLTextAreaElement>)=>void
    newPostText: string
}


function MyPosts(props: MyPostsPageType) {
    const postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const onAddPost = () => {
       props.addPost()
    }

    const onAddChange = (text: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onAddChange}
                    value={props.newPostText}
                    />
                </div>
                <div>

                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts