import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {AppBar,Container,Avatar,Button,Typography,Toolbar} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { useHistory,useLocation } from 'react-router-dom';
import decode from 'jwt-decode'
import memories from '../../images/memories.png';
import UseStyle from "./style.js";


const NavBar = () => {
    const classes=UseStyle();
    const dispatch=useDispatch();
    const history= useHistory();
    const location= useLocation();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const logout=()=>{
        dispatch({type: 'LOGOUT'});
        history.push('/');
        setUser(null);
    }
    useEffect(()=>{
        const token=user?.token;

       if(token){
           const decodedToken=decode(token)
           if (decodedToken.exp*1000< new Date().getTime()) logout();
       }

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])
    return (
        <AppBar className={classes.appBar} position="static">
            <Container className={classes.container}>
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} align="center">OUR MEMORIES</Typography>
                <Typography component={Link} to='/'><img className={classes.image} src={memories} alt={memories} height="50" /></Typography>
            </div>
            
            <Toolbar className={classes.toolBar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} varient="h6">{user.result.name}</Typography>
                        <Button varient="contained" className={classes.logout} color='secondary'onClick={logout}>LOG OUT</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' className={classes.signIn} varient="contained" >SIGN IN</Button>
                )}
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar;
