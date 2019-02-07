import * as React from 'react';
import { produce } from 'immer';
import { TodoContext } from './TodoList/TodoContext';
import TodoView from './TodoList/TodoView.jsx';
// import RandomUser from './Components/RandomUser/RandomUser.jsx'
import './App.css';

const useImmerReducer = (reducer, initialState) => {
    return React.useReducer(produce(reducer), initialState);
};

const todosReducer = (todos, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            todos.unshift({ text: action.payload, complete: false });
            return;
        case 'TOGGLE_COMPLETE':
            todos[action.payload].complete = !todos[action.payload].complete;
            return;
        case 'RESET':
            return [];
        default:
            return todos;
    }
};

export default () => {
    const [todos, dispatch] = useImmerReducer(todosReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            <TodoView />
            {/*<RandomUser/>*/}
        </TodoContext.Provider>
    );
};
