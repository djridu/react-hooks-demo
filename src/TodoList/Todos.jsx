import * as React from 'react';
import { TodoContext } from './TodoContext';

export default () => {
    const { todos, dispatch } = React.useContext(TodoContext);

    return (
        <div className="todo">
            {todos.map(({ text, complete }, index) => (
                <div
                    key={index}
                    onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: index })}
                    style={{ textDecoration: complete ? 'line-through' : '' }}
                >
                    {text}
                </div>
            ))}
        </div>
    );
};
