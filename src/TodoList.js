import React from 'react';
import './index.css';


function TodoList({allTodos, handleRemove}) {

    if (!allTodos[0]) {
        return <div>No todos...</div>
    }  else {
        return (
            allTodos.map(el => (
                <div key={el.id} className='todo-item'>
                    <li className="li-item">{el.value}</li>
                    <button className="btn btn-close" onClick={() => handleRemove(el.id)}>X</button>
                </div>))
        )
    }
}

export default TodoList

