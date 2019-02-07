import * as React from 'react';
import { TodoContext } from './TodoContext';

export default () => {
    const { dispatch } = React.useContext(TodoContext);

    return <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>;
};
