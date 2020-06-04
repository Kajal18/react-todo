import * as actionTypes from '../actions/actionTypes'

const initialState = {
    storedTodo: [],
    error: null
}

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
const addTodoSuccess = (state, action) => {
    let todoArray = []
    todoArray.push(action.todoData)
    const newTodo = state.storedTodo.concat(todoArray);
    return {
        ...state,
        storedTodo: newTodo,
    };
}

const addTodoFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

const fetchTodoSucess = (state, action) => {
    return {
        ...state,
        storedTodo: action.todoData,
    };
}

const fetchTodoFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

const deleteTodoSuccess = (state, action) => {
    const newStoredTodoArray = state.storedTodo.filter(obj => obj._id !== action.todoId)
    return {
        ...state,
        storedTodo: newStoredTodoArray
    }
}

const deleteTodoFail = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.ADD_TODO: return addTodo(state, action)
        case actionTypes.ADD_TODO_SUCCESS: return addTodoSuccess(state, action)
        case actionTypes.ADD_TODO_FAIL: return addTodoFail(state, action)
        case actionTypes.FETCH_TODO_SUCCESS: return fetchTodoSucess(state, action)
        case actionTypes.FETCH_TODO_FAIL: return fetchTodoFail(state, action)
        case actionTypes.REMOVE_TODO_SUCCESS: return deleteTodoSuccess(state, action)
        case actionTypes.REMOVE_TODO_FAIL: return deleteTodoFail(state, action)
        default: return state
    }
}

export default reducer