import React, { Component } from 'react';
import Header from '../Header';
import TodoList from '../TodoList';
import Filter from '../Filter';

class TodoApp extends Component {
  state = {
    todoList: [],
  }

  onAddItem = (item) => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: this.state.todoList.length+1,
          text: item,
          completed: false
        }
      ]
    });
  }

  onCompletedTask = (id) => {
    const newTodoList = this.state.todoList.map(item => {
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed,
        }
      }
      return item;
    });
    this.setState({ todoList: newTodoList });
  }

  render() {
    const { onAddItem, state: { todoList } } = this;

    return (
      <div className="container mt-5">
        <div className="card">
          <Header onAdd={ onAddItem } />
          <TodoList onCompletedTask={this.onCompletedTask} TodoList={ todoList }/>
          <Filter />
        </div>
      </div>
    );
  }
}

export default TodoApp;
