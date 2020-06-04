import React, { useState } from 'react';
import classes from './AddTodo.module.css'
import Input from '../../layout/Input/Input';
import * as actionTypes from '../../../store/actions'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import Button from '../../layout/Button/Button';
import errorHanlder from '../../../hoc/errorHandler/ErrorHandler';
import axios from '../../../axios-instance'

const AddTodo = props => {
    const [todoName, setTodoName] = useState(null)
    const [todoDueDate, setTodoDueDate] = useState(null)

    const addTodoHandler = (event) => {
        event.preventDefault()
        const todoInputs = {
            name: todoName,
            dueDate: todoDueDate,
        }
        props.onAddTodo(todoInputs)
        props.history.replace('/')
    }
    return (
        <div className={classes.AddTodo}>
            <b>ADD TODO</b>
            <form>
                <Input type="text"
                    placeholder="todo name"
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}></Input>
                <Input type="date"
                    placeholder="todo due date"
                    value={todoDueDate}
                    onChange={(e) => setTodoDueDate(e.target.value)}></Input>
                <Button className={classes.ModalButton} clicked={addTodoHandler}>Save</Button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (todoInputs) => {
            dispatch(actionTypes.addTodo(todoInputs))
        }
    }
}
export default connect(null, mapDispatchToProps)(withRouter(AddTodo))