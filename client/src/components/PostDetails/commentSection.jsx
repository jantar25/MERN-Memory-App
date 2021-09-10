import React,{useState,useRef} from 'react'
import {Typography,TextField,Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {commentPost} from '../../actions/posts'
import useStyles from './styles'

const CommentSection=({post})=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    const {comments,setComments}=useState();
    const {comment,setComment}=useState();
    const user=JSON.parse(localStorage.getItem('user'));

    const handleClick=()=>{
        const finalComment=`${user.result.name}:${comment}`;
        dispatch(commentPost(finalComment,post._id));
    }
    console.log(post);
    return (
        <div>
            <div className={classes.commentOuterContainer}>
                <div className={classes.commentInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments.map((c,i)=>(
                        <Typography key={i} gutterBottom variant="subtitle1">

                        </Typography>
                    ))}
                </div>
                <div style={{width:'70%'}}>
                <Typography gutterBottom variant="h6">Write a Comment</Typography>
                <TextField 
                    fullWidth
                    rows={4}
                    variant='outlined'
                    label='Comment'
                    multiline
                    valur={comment}
                    onChange={(e)=> setComment(e.target.value)}
                />
                <Button style={{marginTop:'10px'}} fullWidth 
                disabled={!comment} variant='contained' 
                onClick={handleClick} colo='primary'>
                        Comment
                </Button>
                </div>
            </div>
        </div>
    )
}

export default CommentSection;