import React from 'react'
import TodoItem from './TodoItem'
const Todos = ({todos, toggleCompleted, deleteToggleItem}) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        toggleCompleted={toggleCompleted} 
                        deleteToggleItem={deleteToggleItem} 
                    />
                )
            })}
        </div>
    )
}

const styles = {
    container: {
        width: '80%',
        margin: '0 auto',
        
    },
}

export default Todos