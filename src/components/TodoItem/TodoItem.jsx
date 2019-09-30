import React from 'react';
import './styles.css';

const TodoItem = ({ text, completed, onCompletedTask, id }) => (
    <div className="container">
      <li  className={`list-group-item`} >
        <div className="text">
          <i onClick={() => onCompletedTask(id) } class="material-icons"> { completed ? 'check' : 'cancel' }</i>
          <div className={`${completed ? 'text-line' : ''} ml-2`}>{text}</div>
        </div>
      </li>

    </div>

);


export default TodoItem;
