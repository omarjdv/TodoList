import React from 'react';
import './styles.css';

const TodoItem = ({ text, completed, onCompletedTask, id, onDeleteItem }) => (
    <div className="container">
      <li  className={`list-group-item`} >
        <div className="text">
          <i onClick={() => onCompletedTask(id) } className="material-icons"> { completed ? 'check' : 'cancel' }</i>
          <div className={`${completed ? 'text-line' : ''} ml-2`}>{text}</div>
          <i onClick={() => onDeleteItem(id)} className="icon"className="material-icons">delete</i>
        </div>
      </li>

    </div>

);

export default TodoItem;
