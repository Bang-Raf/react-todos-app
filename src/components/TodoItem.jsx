import React from "react";

const TodoItem = ({todo, toggleCompleted}) => {
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
        </div>
    )
}

const styles = {
    todoItem: {
        fontSize: '24px',
        padding: '8px',
        border: '2px solid #f4f4f4',
        borderRadius: '10px',
        margin: '8px',
    },
    checkbox: {
        height: '18px',
        width: '18px',
    },
}

export default TodoItem