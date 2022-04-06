import { useState } from 'react'

function useTodos(listass) {

    const [todos, settodos] = useState(listass)

    const addTodo = (newTodo) => {
        newTodo.id = Date.now();
        settodos([
            ...todos,
            newTodo
        ]);
    };

    const deleteTodo = (todoId) => {
        settodos(todos.filter(todo => todo.id !== todoId))
    };


    return [
        todos, addTodo, deleteTodo
    ]
}

export default useTodos
