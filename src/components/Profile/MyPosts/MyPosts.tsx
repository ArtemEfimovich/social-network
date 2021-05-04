import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {ProfilePageType} from "../../../redux/profile-reducer";


type MyPostsPageType = {
    profilePage:ProfilePageType
    addPost: (event: React.MouseEvent) => void
    updateNewPostText:(text:React.ChangeEvent<HTMLTextAreaElement>)=>void
}


function MyPosts(props: MyPostsPageType) {
    const postsElements =
        props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>)


    const onAddPost = (event: React.MouseEvent) => {
       props.addPost(event)
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
                    value={props.profilePage.newPostText}
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