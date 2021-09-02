import React from 'react'
import { BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import {Container,Typography,Toolbar} from "@material-ui/core"
import NavBar from './components/navBar/navBar'
import useStyle from "./style.js"
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import PostDetails from './components/PostDetails/PostDetails'

const App = () => {
    const classes=useStyle();
    const user=JSON.parse(localStorage.getItem('profile'))
    return (
        <BrowserRouter>
            <Container maxidth="xl">
                <NavBar />
                <Switch>
                    <Route path='/' exact component={()=><Redirect to='/posts' />} />
                    <Route path='/posts' exact component={Home} />
                    <Route path='/posts/search' exact component={Home} />
                    <Route path='/posts/:id' exact component={PostDetails} />
                    <Route path='/Auth' exact component={()=>(!user ? <Auth /> : <Redirect to='/posts' />)} />
                </Switch>
                <Toolbar className={classes.toolBar} position="static" >
                <Container>
                <Typography  variant="body2" align="center" >
                    © 2021 Glo'B Jantar
                </Typography>
                </Container>
                </Toolbar>
            </Container>
        </BrowserRouter>
    )
}

export default App

