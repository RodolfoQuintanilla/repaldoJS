import { useState } from 'react';

const useTodos = (iniciales) => {
    const [todos, setTodos] = useState(iniciales);

    const addTodo = (x) => {
        setTodos([
            ...todos,
            x
        ])
    };


    return [
        todos, addTodo, deleteTodo
    ];
};

export default useTodos;