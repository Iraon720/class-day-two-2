import React from "react";

const TodoDisplay = (props) =>{
    const {handleEdit, handleDelete, ...restProps} = props
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.status}</p>
            <button onClick={() => handleEdit(restProps)}>Edit Todo</button>
            <button onClick={() => handleDelete(restProps)}>Delete</button>
        </div>
    )
}

export default TodoDisplay