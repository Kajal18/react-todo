import React, { useState, useEffect, useCallback, useReducer } from 'react';
import Todo from '../../component/Todo/Todo';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import moment from 'moment'
import * as actionTypes from '../../store/actions'
import TodoCount from '../../component/Todo/TodoCount/TodoCount';
import FilterTodo from '../../component/Todo/FilterTodo/FilterTodo';

const todoReducer = (currentTodo, action) => {
    console.log({ currentTodo })
    switch (action.type) {
        case 'SET':
            return action.todos
        default:
            throw new Error('this will not be the case!')
    }
}

const Todos = props => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    console.log({ todos }, props.todoList)
    useEffect(() => {
        props.fetchTodoInit()
    }, [])

    const filterdTodoHandler = (filteredTodo) => {
        dispatch({ type: 'SET', todos: filteredTodo })
    }


    return (
        <div>
            <TodoCount count={todos.length}></TodoCount>
            <FilterTodo filter={filterdTodoHandler} ></FilterTodo>
            {todos.length > 0 && todos.map((todo, index) => {
                return <Todo key={index} todoId={todo._id} todoName={todo.name} dueDate={todo.dueDate}></Todo>
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
        fetchTodoInit: () => dispatch(actionTypes.fetchTodoInit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Todos))