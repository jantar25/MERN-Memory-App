import React from 'react';
import { useSelector } from 'react-redux';
import { Grid,CircularProgress } from '@material-ui/core';

import Post from "./post/Post.js";
import useStyle from "./style.js";

const Posts = ({setCurrentId}) => {
    const {posts,isLoading}=useSelector((state)=>state.posts);
    const classes=useStyle();
   
    if(!posts.length && !isLoading) return <div className={classes.noMemory} >No Memory</div>;
    return (isLoading ? <CircularProgress /> :(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                 <Grid key={post._id} item xs={12} sm={12} md={9} lg={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                 </Grid> ))}
            </Grid>
        )
    );
};

export default Posts;



