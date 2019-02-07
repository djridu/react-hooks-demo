import * as React from 'react';
import Form from './Form.jsx';
import Todos from './Todos.jsx';
import ResetButton from './ResetButton.jsx';

export default () => {
    return (
        <>
            <Form />
            <Todos />
            <ResetButton />
        </>
    );
};
