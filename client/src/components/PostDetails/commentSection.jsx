import React,{useState,useRef} from 'react'
import {Typography,TextField,Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {commentPost} from '../../actions/posts'
import useStyles from './styles'



const CommentSection=({post})=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    const [comments,setComments]=useState(post?.comments);
    const [comment,setComment]=useState('');
    const user=JSON.parse(localStorage.getItem('profile'));
    const commentsRef= useRef();
    

    const handleClick= async ()=>{
        const finalComment=`${user.result.name}:${comment}`;
        const newComments= await dispatch(commentPost(finalComment,post._id));
        setComment('');
        setComments(newComments);
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div>
            <div className={classes.commentOuterContainer}>
                <div className={classes.commentInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments?.map((c,i)=>(
                        <Typography key={i} gutterBottom variant="subtitle2">
                        {c}
                        </Typography>
                        
                    ))}
                    <div ref={commentsRef} />
                </div>
                {user?.result?.name && (
                     <div style={{width:'70%'}}>
                     <Typography gutterBottom variant="h6">Write a Comment</Typography>
                     <TextField fullWidth
                         style={{color:'#000',background:'#282828'}} rows={4}
                         variant='outlined' label='Comment' multiline
                         value={comment} onChange={(e)=> setComment(e.target.value)}
                     />
                     <Button style={{marginTop:'10px',color:'#000',background:'#fff'}} fullWidth 
                     disabled={!comment} variant='contained' 
                     onClick={handleClick}>
                             Comment
                     </Button>
                     </div>
                )}
               
            </div>
        </div>
    )
}

export default CommentSection;






//   return (
//     <div>
//       <div className={classes.commentsOuterContainer}>
//         <div className={classes.commentsInnerContainer}>
//           <Typography gutterBottom variant="h6">Comments</Typography>
//           {comments?.map((c, i) => (
//             <Typography key={i} gutterBottom variant="subtitle1">
//               <strong>{c.split(': ')[0]}</strong>
//               {c.split(':')[1]}
//             </Typography>
//           ))}
//           <div ref={commentsRef} />
//         </div>
//         <div style={{ width: '70%' }}>
//           <Typography gutterBottom variant="h6">Write a comment</Typography>
//           <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
//           <br />
//           <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
//             Comment
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentSection;
