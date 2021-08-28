import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import {Container,Typography,Toolbar} from "@material-ui/core"
import NavBar from './components/navBar/NavBar'
import useStyle from "./style.js"
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

const App = () => {
    const classes=useStyle();
    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Auth' exact component={Auth} />
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

