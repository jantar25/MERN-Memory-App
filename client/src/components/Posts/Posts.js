import React from 'react'
import Post from "./post/Post.js"
import useStyle from "./style.js"

const Posts = () => {
    const classes=useStyle();
    return (
        <>
        <h1>Posts</h1>
        <Post />
        <Post />
        <Post />
        </>
    )
}

export default Posts
