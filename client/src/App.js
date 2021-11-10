import { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memoriesImage from './assets/images/memories.png';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import useStyles from './styles';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={memoriesImage} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Grid
                    container
                    className={classes.mainContainer}
                    justifyContent="space-between"
                    alignItems="stretch"
                    spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                </Grid>
            </Grow>
        </Container>
    );
}

export default App;