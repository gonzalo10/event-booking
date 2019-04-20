import React from 'react';
import {Button} from 'react-bootstrap';
import classes from './LoadMore.css';

const loadMore = (props) => (
    <div className={classes.LoadMore}>
        <Button onClick={props.load}>Load More</Button>
    </div>
);
            
export default loadMore;