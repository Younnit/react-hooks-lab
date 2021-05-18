import Todo from './Todo'
function List(props) {
    return (
        <div>
            {
                props.todos.map(todo => {
                    return(
                        <Todo key={todo} todo={todo} />
                    )
                })
            }
        </div>
    )
}

export default List
