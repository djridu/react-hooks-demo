import * as React from 'react';
import { TodoContext } from './TodoContext';

const useInputValue = initialValue => {
    const [value, setValue] = React.useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue(''),
    };
};

export default React.memo(() => {
    const { dispatch } = React.useContext(TodoContext);
    const { resetValue, ...text } = useInputValue('');

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch({ type: 'ADD_TODO', payload: text.value });
                resetValue();
            }}
        >
            <input {...text} />
            <button type="submit">
                Add Todo
            </button>
        </form>
    );
});
