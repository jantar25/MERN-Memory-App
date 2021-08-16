import React from 'react';
import { useSelector } from 'react-redux';
import { Grid,CircularProgress } from '@material-ui/core';

import Post from "./post/Post.js";
import useStyle from "./style.js";

const Posts = ({setCurrentId}) => {
    const posts=useSelector((state)=>state.posts);
    const classes=useStyle();
    console.log(posts)
    return (!posts.length ? <CircularProgress /> :(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                 <Grid key={post._id} item xs={12} ms={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                 </Grid> ))}
            </Grid>
        )
    );
};

export default Posts;



