import React, { useState, useEffect } from 'react';
import Todo from '../Todo';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import moment from 'moment'
import * as actionTypes from '../../../store/actions'
import TodoCount from '../TodoCount/TodoCount';
const OverDueTodo = props => {

    useEffect(() => {
        props.fetchTodoInit()
    }, [props.todoList])
    let overTask = props.todoList.filter((todo) => moment(todo.dueDate) <= moment())
    return (
        <div>
            <TodoCount count={overTask.length}></TodoCount>
            {overTask && overTask.map((todo) => {
                return <Todo key={todo._id} todoId={todo._id} todoName={todo.name} dueDate={todo.dueDate} ></Todo>
            })}
        </div>
    )

}
const mapStateToProps = state => {
    return {
        todoList: state.todoReducer.storedTodo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onRemoveTodo: (todoId) => dispatch(actionTypes.removeTodoInit(todoId)),
        fetchTodoInit: () => dispatch(actionTypes.fetchTodoInit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OverDueTodo))