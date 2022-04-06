import React from 'react'
import useTodos from '../hooks/useTodos';

const listass = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Node js' },
    { id: 3, title: 'Learn TypeScript' }
];


const listar = [
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Node js' },
    { id: 3, title: 'Learn TypeScript' }
];

function TodoApp() {

    const [todos, addTodo, deleteTodo] = useTodos(listass)

    return (
        <div>
            <button onClick={() => addTodo({ title: 'Nueva Tarea' })}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}

            </ul>

            <hr />

       

        </div>
    )
}

export default TodoApp
