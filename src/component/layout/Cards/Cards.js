import React from 'react';
import classes from './Cards.module.css'
const Cards = props => {
    return (
        <div className={classes.Cards} style={props.style}>
            {props.children}
        </div>
    )
}

export default Cards