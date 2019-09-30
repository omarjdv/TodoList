import React, { Component } from 'react';
import Header from '../Header';
import TodoList from '../TodoList';
import Filter from '../Filter';

class TodoApp extends Component {
  state = {
    todoList: [],
    filterby: 'ALL',
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

  onChangeFilter = (filter) => {
   this.setState({filterby: filter})
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
    const { onDeleteItem, onAddItem, onCompletedTask, state: { todoList, filterby } } = this;
    const todoListToShow = todoList.filter(todo => {
      if(filterby === 'ALL') {
        return true;
      }
      if(filterby === 'COMPLETED') {
        return todo.completed === true;
      }
      if(filterby === 'ACTIVE') {
        return todo.completed !== true;
      }

    });

    return (
      <div className="container mt-5">
        <div className="card card-body">
          <Header onAdd={ onAddItem } />
          <TodoList onDeleteItem={onDeleteItem} onCompletedTask={onCompletedTask} TodoList={ todoListToShow }/>
          <Filter onChangeFilter={this.onChangeFilter}/>
        </div>
      </div>
    );
  }
}

export default TodoApp;
