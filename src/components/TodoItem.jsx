import React from "react";

const TodoItem = ({ todo }) => {
    return <p style={ styles.todoItem }>{todo.title}</p>
}

const styles = {
    todoItem: {
        fontSize: '24px',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '10px',
    },
}

export default TodoItem