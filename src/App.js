import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Meditate',
        completed: false
      },
      {
        id: 2,
        title: 'Go for a run',
        completed: false
      },
      {
        id: 3,
        title: 'Prepare lunches',
        completed: true
      },
      {
        id: 4,
        title: 'Ring people',
        completed: false
      },
      {
        id: 5,
        title: 'Paint nails',
        completed: false
      }
    ]
  }
  render() {
    console.log(this.state.todos) 
    return (
      <div className="App">
    <Todos todos={this.state.todos} />
      
    
    </div>
  );
}
}

export default App;
