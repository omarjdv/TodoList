import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ TodoList, onCompletedTask }) => {

  return (
    <ul className="list-group">
      {
        TodoList.map(({ text, id, completed }) => (
          <TodoItem onCompletedTask={onCompletedTask} text={text} id={id} key={id} completed={completed} />
        ))
      }
    </ul>
  );
}

export default TodoList;
