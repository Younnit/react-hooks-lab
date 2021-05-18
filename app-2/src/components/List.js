import React from 'react'

function List(props) {
    return (
        <div>
            {props.list.map(element =>{
                return(
                    <h2 key={element.name}>{element.name}</h2>
                )
            })}
        </div>
    )
}

export default List
