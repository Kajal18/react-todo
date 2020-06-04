import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation/NavigationItems/NavigationItems';
import Todo from './component/Todo/Todo';
import Todos from './container/Todos/Todos';
import AddTodo from './component/Todo/AddTodo/AddTodo';
import OverDueTodo from './component/Todo/OverDueTodo/OverDueTodo';

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Route path="/" component={Todos} exact />
      <Route path="/overDueTodo" component={OverDueTodo} />
      <Route path="/addTodo" component={AddTodo} />
    </React.Fragment>
  );
}

export default App;
