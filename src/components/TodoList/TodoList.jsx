import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ TodoList, onCompletedTask, onDeleteItem }) => {

  return (
    <ul className="list-group">
      {
        TodoList.map(({ text, id, completed }) => (
          <TodoItem onDeleteItem={onDeleteItem} onCompletedTask={onCompletedTask} text={text} id={id} key={id} completed={completed} />
        ))
      }
    </ul>
  );
}

export default TodoList;
