import React, { useState } from 'react';
import Cards from '../layout/Cards/Cards';
import * as actionTypes from '../../store/actions'
import classes from './Todo.module.css';
import moment from 'moment'
import TodoCount from './TodoCount/TodoCount';
import { connect } from 'react-redux'
import Modals from '../layout/Modal/Modal';
import { withRouter } from 'react-router-dom';


const Todo = (props) => {
    const [showModal, setShowModal] = useState(false)

    let todoDueDateClasses = [classes.TodoDueDate]
    if (moment(props.dueDate) < moment()) {
        todoDueDateClasses.push(classes.TodoPassDueDate)
    }
    const modalHandler = () => {
        setShowModal(prevState => {
            return !prevState
        })
    }

    const removeTodo = () => {
        setShowModal(prevState => {
            return !prevState
        })
        props.onRemoveTodo(props.todoId)

    }

    return (
        <div className={classes.Todo} style={{ marginBottom: '1rem' }}>
            <p className={classes.todoName}>{props.todoName}</p>
            <p className={todoDueDateClasses.join(' ')}> {moment(props.dueDate).format('YYYY/MM/DD hh:mm a')}
                <button className={classes.TodoCancelButton} >Cancel</button>
                <button className={classes.TodoDeleteButton} onClick={modalHandler} >Delete</button>
            </p>
            <div>
                {showModal && <Modals text={"Are you sure you want to remove todo?"} closeModal={modalHandler} closeAndRemove={removeTodo} show={showModal}></Modals>}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveTodo: (todoId) => { dispatch(actionTypes.removeTodoInit(todoId)) }
    }
}
export default connect(null, mapDispatchToProps)(withRouter(Todo))