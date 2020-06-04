import React from 'react';
import classes from './Input.module.css'

const Input = props => {
    return (
        <div className={classes.Input}>
            <input className={classes.InputElement} {...props}></input>
        </div>
    )
}

export default Input