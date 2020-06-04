import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={classes.Navigation}>
        <NavigationItem link="/addTodo" >Add Todo</NavigationItem>
        <NavigationItem link="/" active>Todos</NavigationItem>
        <NavigationItem link="/overDueTodo" >Over due/today todo</NavigationItem>
    </ul>
)


export default NavigationItems