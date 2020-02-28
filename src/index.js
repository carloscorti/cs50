import React from 'react';
import { render } from 'react-dom';

let count = 1

const Todo = prop => 
  (
  <li>
    <input type="checkbox" checked={prop.todo.check} onClick={prop.onCheck}/>
    <button onClick={prop.onDelete}>Delete</button>
    <span>{prop.todo.text}</span>
  </li>
  )


class App extends React.Component {

constructor(){
  super()
  this.state = {
    todos: [],
  }
}


addNewTask () {
  const task = prompt('Add the name of the task')
  this.setState ({
    todos: [...this.state.todos, {id:count++, text:task, check:false}],
  })
}

deleteTask (id) {
  this.setState ({
    todos: this.state.todos.filter( todo => todo.id !== id)
  })
}

toggleCkeck(id){
  this.setState ({
    todos: this.state.todos.map( todo => {
      if (todo.id !== id)
        return todo
      return {
          id: todo.id,
          text: todo.text,  
          check: !todo.check,
        }
        
      }
    )
  })
}

  render() {
    return(
      <div>
      <h1>Todo list</h1>
      <p>total tasks {this.state.todos.length}</p>
      <p>total tasks done {this.state.todos.filter( todo => todo.check).length}</p>
      <p>total tasks to do {this.state.todos.filter( todo => !todo.check).length}</p>

      <button onClick={()=> this.addNewTask ()}>Add new Task</button>
        <div>
          <ul>
            {this.state.todos.map( todo => 
              (<Todo 
                todo={todo}
                onDelete ={() => this.deleteTask(todo.id)}
                onCheck ={() => this.toggleCkeck(todo.id)}

              />)
              )}
          </ul>
        </div>
    </div>
  )
}

}

render (<App />, document.getElementById('root'));