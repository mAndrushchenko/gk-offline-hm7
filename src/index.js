import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodosByClass from './TodosByClass';
import TodosByHooks from './TodosByHooks';
import image from './background.jpg'

ReactDOM.render(
    <>
        <img src={image} alt=""/>
        <div className="todos">
            <div className="by-class" >
                <h1>Using classes</h1>
                <TodosByClass />
            </div>
            <div className="by-hooks">
                <h1>Using hooks</h1>
                <TodosByHooks/>
            </div>

        </div>
    </>
    ,
  document.getElementById('root')
);
