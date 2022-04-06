import { useState } from 'react';

const iniciales = [
    { id: 1, title: 'Aprender React' },
    { id: 2, title: 'Aprender Node' }
]

const TodoApp = () => {

    //  const [todos, setTodos] = useState(iniciales);
    const [todos, addTodo, deleteTodo] = useTodos(iniciales);
    return (
        <div>
            <button onClick={addTodo({ title: 'Nueva Tarea' })}>
                Add
            </button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button>
                            Delete
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default TodoApp;