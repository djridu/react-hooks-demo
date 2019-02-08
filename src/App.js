import * as React from 'react';
import { produce } from 'immer';
import { TodoContext } from './TodoList/TodoContext';
import TodoView from './TodoList/TodoView.jsx';
// import RandomUser from './Components/RandomUser/RandomUser.jsx'
import './App.css';

const useImmerReducer = (reducer, initialState) => {
    return React.useReducer(produce(reducer), initialState);
};

const todosReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TODO':
            state.unshift({ text: payload, complete: false });
            return;
        case 'TOGGLE_COMPLETE':
            state[payload.id].complete = !state[payload.id].complete;
            return;
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};

export default () => {
    const initialState = [];
    const [state, dispatch] = useImmerReducer(todosReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <TodoView />
            {/*<RandomUser/>*/}
        </TodoContext.Provider>
    );
};
