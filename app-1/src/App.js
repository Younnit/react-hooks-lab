import {useState} from 'react'
import './App.css';
import List from './components/List'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (item) => {
    const todoNew = [...todos, item]
    setTodos(todoNew)
  }


  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List todos={todos} />
    </div>
  );
}

export default App;
