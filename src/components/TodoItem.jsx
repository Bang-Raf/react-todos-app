import React, {useContext} from "react"
import { TodoContext } from "../App"

const TodoItem = ({todo}) => {
    const { toggleCompleted, deleteTodoItem } = useContext(TodoContext)

    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return { textDecoration: 'line-through' }
        } else {
            return { textDecoration: 'none' }
        }
    }

    return (
        <div style={styles.todoItem}>
            <input 
            type="checkbox"
            tyle={styles.checkbox} 
            onChange={() => toggleCompleted(todo.id)} 
            />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
            <button style={styles.button} onClick={() => {deleteTodoItem(todo.id)}} >x</button>
        </div>
    )
}

const styles = {
    todoItem: {
        fontSize: '24px',
        padding: '0 20px',
        border: '2px solid #f4f4f4',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '8px',
    },
    checkbox: {
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: 'red',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '5px',
    },
}

export default TodoItem