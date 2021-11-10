import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const postsList = useSelector(state => state.posts);
    
    return (
        !postsList.length ? <CircularProgress /> : (
            <Grid
                className={classes.mainContainer}
                container
                alignItems="stretch"
                spacing={3}>
                {
                    postsList.map(post => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}
export default Posts;