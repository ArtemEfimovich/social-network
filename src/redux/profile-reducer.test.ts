import profileReducer, {addPost, deletePost, ProfilePageType} from "./profile-reducer";

let state: ProfilePageType = {
    posts: [
        {id: 0, message: 'Hi, how are you?', likesCount: 15},
        {id: 1, message: "It's my first post", likesCount: 17}
    ],
    newPostText: "",
    profile: null,
    status: ""
}

it('length of posts should be incremented ', ()=>{
    // 1.test data
    let action = addPost("Hello World")

    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect (newState.posts.length).toBe(3)

})

it('message of new post should be correct', ()=>{
    // 1.test data
    let action = addPost("Hello World")

    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts[2].message).toBe("Hello World")

})

it('after deleting length of message should be decrement', ()=>{
    // 1.test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts.length).toBe(1)

})


it('after deleting length shouldn`t be decrement if id is incorrect', ()=>{
    // 1.test data
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts.length).toBe(2)

})
