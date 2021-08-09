import React,{useState,useEffect} from 'react'
import { TextField,Button,Typography,Paper } from '@material-ui/core';
import Filebase from "react-file-base64"
import { useDispatch,useSelector } from 'react-redux';

import useStyle from "./style.js"
import { createPost,updatePost} from '../../actions/posts'

const Form = ({currentId,setCurrentId}) => {
    const [postData,setPostData]=useState({creator:'', title:'',message:'',tags:'',selectedFile:''});
    const post=useSelector((state)=>currentId? state.posts.find((p)=>p._id===currentId): null);
    const classes=useStyle();
    const dispatch=useDispatch()

    useEffect(()=>{
        if(post)setPostData(post)
    },[post])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));
        } else{
            dispatch(createPost(postData));
        }
        clear()
    }
    const clear=()=>{
        setCurrentId(null)
        setPostData({creator:'', title:'',message:'',tags:'',selectedFile:''})
    }
    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{currentId? 'EDIT': 'CREATE'} MEMORY</Typography>
                    <TextField 
                    name="creator" variant="outlined" 
                    label="Creator" fullWidth 
                    value={postData.creator} 
                    onChange={(e)=>setPostData({...postData,creator: e.target.value})} />
                    <TextField 
                    name="title" variant="outlined" 
                    label="Title" fullWidth 
                    value={postData.title} 
                    onChange={(e)=>setPostData({...postData,title: e.target.value})} />
                    <TextField 
                    name="message" variant="outlined" 
                    label="Message" fullWidth 
                    value={postData.message} 
                    onChange={(e)=>setPostData({...postData,message: e.target.value})} />
                    <TextField 
                    name="tags" variant="outlined" 
                    label="Tags" fullWidth 
                    value={postData.tags} 
                    onChange={(e)=>setPostData({...postData,tags: e.target.value})} />
                    <div className={classes.fileInput}>
                        <Filebase
                            type="file"
                            multiple={false}
                            onDone={({base64})=>setPostData({...postData,selectedFile : base64})}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" 
                        color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" 
                    onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </div>
    )
}

export default Form
