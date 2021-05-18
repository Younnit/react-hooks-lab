import React, {useState} from 'react'

function AddTodo(props) {
    const [newTodo, setNewTodo] = useState('')

    const handleAdd = (thing) => {
        props.addTodo(newTodo)
        setNewTodo('')
    }

    return (
        <div>
            <input placeholder='Add a new Todo.' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={handleAdd}>Submit</button>
        </div>
    )
}

export default AddTodo
