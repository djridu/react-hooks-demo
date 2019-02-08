import * as React from 'react';
import { TodoContext } from './TodoContext';

export default ({ id, onClick, handleDelete, completed, text }) => {
    const { dispatch } = React.useContext(TodoContext);

    return (
        <li
            onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: { id: id } })}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
            <div className="item">
                {text}
                <div id={id} className="x" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: id } })}/>
            </div>

        </li>
    );
}
