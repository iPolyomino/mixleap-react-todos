import React, { Component } from 'react';
import './App.css';

import Title from './Title';
import InputArea from './InputArea';
import Lists from './Lists';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputText: '',
    };

    this.updateTodos = this.updateTodos.bind(this);
    this.updateInputText = this.updateInputText.bind(this);
  }

  updateTodos(todos) {
    this.setState({
      todos: todos,
    });
  }

  updateInputText(value) {
    this.setState({
      inputText: value,
    });
  }

  render() {
    return (
      <div className="a__todos">
        <div className="b__title">
          <Title />
        </div>
        <div className="b__add-input">
          <InputArea
            inputText={this.state.inputText}
            todos={this.state.todos}
            updateInputText={this.updateInputText}
            updateTodos={this.updateTodos}
          />
        </div>
        <div className="b__lists">
          <Lists todos={this.state.todos} updateTodos={this.updateTodos} />
        </div>
      </div>
    );
  }
}

export default App;
