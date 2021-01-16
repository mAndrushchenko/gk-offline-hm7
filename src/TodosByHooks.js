import React, {useState} from 'react';
import {defListForHooks} from "./defaltTodoList";
import TodoList from "./TodoList";
import './index.css';


function TodosByHooks() {
    const [todo, setTodo] = useState({});
    const [allTodos, setAllTodos] = useState(defListForHooks);


    const onAdd = (e) => {
        e.preventDefault()
        if (!todo.value) return
        setAllTodos(prev => {
            return [todo, ...prev]
        })
        setTodo({})
    }
    const handleChange = ({target}) => {
        setTodo({
            value: target.value,
            id: Date.now()
        })
    }
    const handleRemove = (todoId) => {
        setAllTodos(prev => prev.filter(el => el.id !== todoId ))
    }

    return (
        <div className="App">
            <form onSubmit={onAdd} className="todo-maker">
                <input type='text' onChange={handleChange} className="field" value={todo.value || ""}/>
                <button type="submit" className="btn-add">Add</button>
            </form>
            <TodoList allTodos={allTodos} handleRemove={handleRemove}/>
        </div>
    );
}

export default TodosByHooks;
