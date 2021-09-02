import React from 'react'
import {useState,useEffect} from 'react'
import {Container,Grow,Grid,Paper} from "@material-ui/core"
import { useDispatch } from 'react-redux'
import { getPosts } from "../../actions/posts"
import useStyle from "./style.js"
import Posts from "../../components/Posts/Posts";
import Form from '../../components/form/Form';
import Pagination from '../Pagination'


const Home = () => {
    const [currentId,setCurrentId]=useState(null);
    const classes=useStyle();
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);
    return (
        <Grow in>
                <Container>
                    <Grid  className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            {/* className={classes.pagination} */}
                            <Paper  elevation={6}>
                                <Pagination />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Home
