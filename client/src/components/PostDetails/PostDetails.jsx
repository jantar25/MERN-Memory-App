import React,{useEffect} from 'react'
import {Paper,Typography,CircularProgress,Devider} from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import moment from 'moment'
import {useParams,useHistory} from 'react-router-dom'

import useStyles from './styles'

const PostDetails = () => {
   const {post,posts,isLoading}=useSelector((state)=>state.posts);
    return (
        <div>
            POSTDETAILS
        </div>
    )
}

export default PostDetails;
