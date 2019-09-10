import React from 'react';
import  './Todo.css';

function Todo (props) {


    return(
        <div
        // onClick={() => props.dispatch({ type: "TOGGLE_COMPLETED" , payload: props.id })}


        onClick={() => props.toggleCompleted(props.)}
         className={props.todo.completed ? "complete" : ""}>
            {.props.todo.task}
        </div>

    );

}


export default Todo;