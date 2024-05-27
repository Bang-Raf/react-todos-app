import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div style={styles.container}>
            <form onSubmit={(event) => {
                handleSubmit(event)
            }}>
                <input type="text" placeholder='Add your Todo' style={styles.formInput} value={title} onChange={(event) => {handleChangeTitle(event)}} />
                <button style={styles.button}>Add Todo</button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
        marginBottom: '16px',
        justifyContent: 'space-between',
    },
    formInput: {
        height: '66px',
        width: '60%',
        fontSize: '16px',
        padding: '0 16px',
        borderRadius: '10px',
        marginRight: '3px',
    },
    button: {
        height: '72px',
        fontSize: '16px',
        marginLeft: '3px',
    },
}

export default TodoForm