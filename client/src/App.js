import React,{useState,useEffect} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core"
import { useDispatch } from 'react-redux'
import { getPosts } from "./actions/posts"
import memories from "../src/images/memories.jpg"
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
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h3" align="center">OUR MEMORIES</Typography>
                <img className={classes.image} src={memories} alt={memories} height="70" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid  container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App

// direction="column-reverse" 
// className={classes.mainContainer}
