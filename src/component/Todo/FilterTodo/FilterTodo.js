import React, { useState, useEffect, useRef } from 'react';
import classes from './FilterTodo.module.css'
import axios from 'axios'

const FilterTodo = props => {
    const [filterTodo, setFilterTodo] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log({ filterTodo }, inputRef.current.value)
            if (filterTodo === inputRef.current.value) {
                axios({
                    method: 'get',
                    url: `http://localhost:3001/todo/search`,
                    params: {
                        search: filterTodo
                    },
                    headers: { 'Content-Type': 'application/json' },
                }).then((res) => {
                    console.log('-------------', res.data)
                    props.filter(res.data)
                }).catch((err) => {
                    return err.error
                })
            }
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    }, [filterTodo])

    return (
        <div>
            <form >
                <input className={classes.Filterform}
                    type="text"
                    placeholder="search..."
                    onChange={(e) => setFilterTodo(e.target.value)}
                    ref={inputRef}
                />
            </form>
        </div>
    )
}


export default FilterTodo