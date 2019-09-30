import React from 'react';

const Filter = ({ onChangeFilter }) => {

  return (

    <div className="card-body">
      <div class="btn-group" role="group" aria-label="Basic example">
      <button onClick={() => { onChangeFilter('ALL') } } type="button" class="btn btn-primary" >All</button>
      <button onClick={() => { onChangeFilter('ACTIVE') } } type="button" class="btn btn-primary">Active</button>
      <button onClick={() => { onChangeFilter('COMPLETED') } } type="button" class="btn btn-primary">Completed</button>
      </div>

    </div>
  );
}

export default Filter;
