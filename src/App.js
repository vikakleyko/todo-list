import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Rotuer, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/addTodo";
import About from './components/pages/About'
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then( resp => this.setState({
      todos: resp.data
    }));
  }

  // Toggle completed
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then( resp => this.setState({
      todos: [...this.state.todos.filter( todo => todo.id !== id)]
    }));
  }

  // Add Todo
  addTodo = title => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    .then(resp =>  this.setState({
      todos: [...this.state.todos, resp.data]
    }));
  }

  render() {
    return (
      <Rotuer>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About}/>
          </div>
        </div>
      </Rotuer>
    );
  }
}

export default App;
