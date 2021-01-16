import React, {PureComponent} from 'react';
import {defListForClasses} from "./defaltTodoList";
import './index.css';

import TodoList from "./TodoList";

class TodosByClass extends PureComponent {
    constructor() {
        super();
        this.state = {
            todo: {},
            allTodos: defListForClasses
        }
    }

    onAdd = (e) => {
        e.preventDefault()
        const {todo} = this.state

        if (!todo.value) return
        this.setState(prevState => ({
            allTodos: [prevState.todo,...prevState.allTodos],
            todo: {}
        }))
    }
    handleChange = ({target}) => {
        this.setState({todo: {
                value: target.value,
                id: Date.now()
            }
        })
    }
    handleRemove = (todoId) => {
        this.setState(prevState => ({
            allTodos: [...prevState.allTodos.filter(el => el.id !== todoId)]
        }))
    }

    render() {
        const {onAdd, handleChange, handleRemove} = this
        const {todo, allTodos} = this.state
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
}

export default TodosByClass;
