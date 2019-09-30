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

  onDeleteItem = (id) => {
   const { todoList } = this.state;
   const newList = todoList.filter(news => news.id !== id);
    // console.log(id, newList);
  this.setState({todoList: newList})
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
    const { onDeleteItem, onAddItem, onShowAllList, state: { todoList } } = this;

    return (
      <div className="container mt-5">
        <div className="card">
          <Header onAdd={ onAddItem } />
          <TodoList onDeleteItem={onDeleteItem} onCompletedTask={this.onCompletedTask} TodoList={ todoList }/>
          <Filter />
        </div>
      </div>
    );
  }
}

export default TodoApp;
