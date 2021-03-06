import React,{useState} from 'react'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined" 
import {Avatar,Button,Paper,Container,Typography,Grid} from "@material-ui/core"
import { GoogleLogin } from 'react-google-login';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyle from "./style.js";
import Input from './Input.js';
import Icon from './icon.js';
import {signin,signup} from '../../actions/auth'



const initialState={firstName:'',lastName:'',email:'',password:'',confirmPassword:''}

const Auth = () => {
    const classes=useStyle();
    const [isSignup,setIsSignup]=useState(false);
    const [showPassword,setShowPassword]=useState(false);
    const [formData,setFormData]=useState(initialState);
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)
    const dispatch = useDispatch();
    const history= useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (isSignup){
            dispatch(signup(formData,history));
        }else{
            dispatch(signin(formData,history));
        }
    };
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
};
    const switchMode=()=>{
        setIsSignup((prevIsSignup)=>!prevIsSignup)
        setShowPassword(false)
    }
    const googleSuccess= async(res)=>{
        const result=res?.profileObj;
        const token=res?.tokenId;
        try {
            dispatch({type:'AUTH',data:{result,token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    const googleFailure=(error)=>{
        console.log(error);
        console.log('Google Sign In Failed,Please try again later')
    };
    
    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'SIGN UP' : 'SIGN IN'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='Email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && (<Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password' /> )
                        }   
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' className={classes.submit}>{isSignup ? 'SIGN UP' : 'SIGN IN' }</Button>
                    <GoogleLogin 
                    clientId="8663423336-v3rfqdp8fb45rsiitu48ckcitf73qe82.apps.googleusercontent.com"
                    render={(renderProps)=>(
                        <Button className={classes.googleButton} 
                        fullWidth 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} 
                        startIcon={<Icon />} 
                        variant='contained' >
                            Google Sign In
                            </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>{isSignup ? 'Do you have already an account? Sign In' : "Don't you have an account? Sign up "}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
