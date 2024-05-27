import { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import './App.css'

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
      deleted: false
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
      deleted: false
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
      deleted: false
    }
  ])

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodoItem = (todoId) => {
    const updatedTodos = todos.filter((todo) => {
      if (todo.id !== todoId) {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = { id: todos.length + 1, title: todoTitle, completed: false, deleted: false }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider value={{toggleCompleted, deleteTodoItem}}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '24px',
    width: '100%'
  },
  title: {
    fontSize: '36px',
  },
}

export default App
