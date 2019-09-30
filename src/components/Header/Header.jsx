import React from 'react';


const Header = ({ onAdd, onDeleteItem }) => {

  const ref = React.createRef();


  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(ref.current.value);
    ref.current.value = null;
  }

  return (
    <div className="card-body">
      <form onSubmit={onSubmit}>
        <input ref={ref} required type="text" className="form-control" placeholder="Write something"/>
      </form>
    </div>

  );
}

export default Header;
