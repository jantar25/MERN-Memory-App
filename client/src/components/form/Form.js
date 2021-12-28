import React,{useState,useEffect} from 'react'
import { TextField,Button,Typography,Paper } from '@material-ui/core';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import { useDispatch,useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import useStyle from "./style.js"
import { createPost,updatePost} from '../../actions/posts'

const Form = ({currentId,setCurrentId}) => {
    const [file,setFile] = useState("");
    const [postData,setPostData]=useState({title:'',message:'',tags:'',selectedFile:''});
    const post=useSelector((state)=>currentId? state.posts.posts.find((p)=>p._id===currentId): null);
    const classes=useStyle();
    const dispatch=useDispatch();
    const history=useHistory();
    const user= JSON.parse(localStorage.getItem('profile'));

    const clear=()=>{
        setCurrentId(null)
        setPostData({title:'',message:'',tags:'',selectedFile:''})
    }

    useEffect(()=>{
        if(post)setPostData(post)
    },[post])


    const handleSubmit=(e)=>{
        e.preventDefault();
            const fileName = new Date().getTime() + file.name;
            const storage = getStorage(app); 
            const storageRef = ref(storage,fileName);  
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                    default:
                }
            }, 
            (error) => {
                console.log(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    if(currentId){
                        dispatch(updatePost(currentId,{...postData,selectedFile:downloadURL,name:user?.result?.name}));
                    } else{
                        dispatch(createPost({...postData,selectedFile:downloadURL,name:user?.result?.name},history));
                        
                    }
                    clear()
                }
                );
            }
            );
        }       



    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography variant='h6' align='center'>
                    Sign In to create your memories and like other's memories
                </Typography>
            </Paper>
        )
    }

    return (
        <div>
            <Paper className={classes.paper} elevation={6}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{currentId? 'EDIT': 'CREATE'} MEMORY</Typography>
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
                    onChange={(e)=>setPostData({...postData,tags: e.target.value.split(",")})} />
                    <input className={classes.fileInput} type="file" id="file"
                    multiple={false} onChange={e=>setFile(e.target.files[0])} />
                    <Button className={classes.buttonSubmit} variant="contained" 
                         size="large" type="submit" fullWidth>Submit</Button>
                    <Button className={classes.buttonClear} variant="contained"  size="small" 
                    onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </div>
    )
}

export default Form


