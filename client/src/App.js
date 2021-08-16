import React,{useState,useEffect} from 'react'
import {Container,AppBar,Typography,Grow,Grid,Toolbar} from "@material-ui/core"
import { useDispatch } from 'react-redux'
import { getPosts } from "./actions/posts"
import memories from "../src/images/memories.png"
import Posts from "./components/Posts/Posts";
import Form from './components/form/Form.js'
import useStyle from "./style.js"

const App = () => {
    const [currentId,setCurrentId]=useState(null);
    const classes=useStyle();
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);
    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static">
                <Typography className={classes.heading} align="center">OUR MEMORIES</Typography>
                <img className={classes.image} src={memories} alt={memories} height="70" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid  className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            <Toolbar  className={classes.toolBar} position="static" >
            <Container>
              <Typography  variant="body2" align="center" >
                © 2021 Glo'B Jantar
              </Typography>
              </Container>
            </Toolbar>

        </Container>
    )
}

export default App

