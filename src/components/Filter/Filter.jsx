import React from 'react';

const Filter = ({ onShowAllList, todoList, completed }) => {
  return (
    <div className="card-body">
      <a href="#" className="card-link">All</a>
      <a href="#" className="card-link">Active</a>
      <a href="#" className="card-link">Completed</a>
    </div>
  );
}

export default Filter;
