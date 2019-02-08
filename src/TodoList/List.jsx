import * as React from 'react';
import FlipMove from 'react-flip-move';
import Todo from './Todo'
import { TodoContext } from './TodoContext';

const List = () => {
    const { todos } = React.useContext(TodoContext);
console.log(TodoContext)
    return (
        <ul>
            <FlipMove duration={250} easing="ease-out">
                {
                    todos.map(({ text, complete }, index) => (
                        <Todo
                            key={index}
                            id={index}
                            text={text}
                        />
                    ))
                }
            </FlipMove>
        </ul>
    );
};

export default List;
