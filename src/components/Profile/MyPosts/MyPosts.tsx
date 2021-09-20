import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {ProfilePageType} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";


type MyPostsPageType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}


function MyPosts(props: MyPostsPageType) {
    const postsElements =
        props.profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const onSendPost = (postMessage: string) => {
        props.addPost(postMessage)
    }


    const addNewPost = (values: any) => {
        onSendPost(values.newPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPost' placeholder='Enter your post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)


export default MyPosts;