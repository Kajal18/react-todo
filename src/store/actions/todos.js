import * as actionTypes from './actionTypes'
import axios from 'axios'

// export const addTodo = (todoData) => {
//     console.log({ todoData })
//     return {
//         type: actionTypes.ADD_TODO,
//         // todoData: todoData
//     }
// }

export const addTodoSuccess = (todoData) => {
    return {
        type: actionTypes.ADD_TODO_SUCCESS,
        todoData: todoData
    }
}

export const addTodoFail = (error) => {
    return {
        type: actionTypes.ADD_TODO_FAIL,
        error: error
    }
}

export const addTodo = (todoData) => {
    return dispatch => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/todo/create',
            headers: { 'Content-Type': 'application/json' },
            data: {
                name: todoData.name,
                dueDate: todoData.dueDate
            }
        }).then((response) => {
            if (response.status === 200) {
                console.log({ response })
                dispatch(addTodoSuccess(response.data));
            }
        }).catch((err) => {
            dispatch(addTodoFail(err));
        })
    };
};


export const fetchTodoSuccess = (todoData) => {
    return {
        type: actionTypes.FETCH_TODO_SUCCESS,
        todoData: todoData
    }
}

export const fetchTodoFail = (error) => {
    return {
        type: actionTypes.FETCH_TODO_FAIL,
        error: error
    }
}

export const fetchTodoInit = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/todo/list',
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            const fetchData = []
            for (let key in res.data) {
                fetchData.push({
                    ...res.data[key],
                    id: key
                })
            }
            dispatch(fetchTodoSuccess(fetchData));
        }).catch((err) => {
            console.log(err)
            dispatch(fetchTodoFail(err.error));
        })
    };
}

export const removeTodoSuccess = (todoData) => {
    return {
        type: actionTypes.REMOVE_TODO_SUCCESS,
        todoId: todoData._id
    }
}

export const removeTodoFail = () => {
    return {
        type: actionTypes.REMOVE_TODO_FAIL
    }
}

export const removeTodoInit = (TodoId) => {
    return dispatch => {
        axios({
            method: 'post',
            url: `http://localhost:3001/todo/delete/${TodoId}`,
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            dispatch(removeTodoSuccess(res.data));
        }).catch((err) => {
            dispatch(removeTodoFail(err.error));
        })
    }
}

export const filterTodoInit = (search) => {
    return dispatch => {
        axios({
            method: 'get',
            url: `http://localhost:3001/todo/search`,
            params: {
                search
            },
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            return err.error
        })
    }
}

