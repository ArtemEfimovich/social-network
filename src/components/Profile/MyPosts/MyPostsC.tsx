import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {ProfilePageType} from "../../../redux/profile-reducer";


type MyPostsPageType = {
    profilePage:ProfilePageType
    addPost: () => void
    updateNewPostText:(text:React.ChangeEvent<HTMLTextAreaElement>)=>void
}


class MyPostsC extends React.Component<MyPostsPageType> {
     postsElements =
        this.props.profilePage.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>)


     onAddPost = () => {
         this.props.addPost()
    }

     onAddChange = (text: React.ChangeEvent<HTMLTextAreaElement>) => {
         this.props.updateNewPostText(text)
    }


    render() {
        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea onChange={this.onAddChange}
                              value={this.props.profilePage.newPostText}
                    />
                    </div>
                    <div>

                        <button onClick={this.onAddPost}>Add post</button>
                    </div>

                </div>
                <div className={s.posts}>
                    {this.postsElements}
                </div>
            </div>
        )
    }
}






export default MyPostsC;