import React from 'react';
import classes from './TodoCount.module.css'

const TodoCount = (props) => {
    return (
        <div className={classes.TodoCount}>
            {props.count}
        </div>
    )
}

export default TodoCount