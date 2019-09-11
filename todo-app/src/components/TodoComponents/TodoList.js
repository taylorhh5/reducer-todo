
import { initialState, todoReducer } from "../../Reducers/todoReducer.js";
import './Todo.css';
import React, { useState, useReducer } from 'react';

const TodoList = (props) => {
    // const [state, dispatch] = useReducer(todoReducer, initialState);



    return (



        <div onClick={() => props.dispatch({ type: "TOGGLE_TODO", payload: props.id })}
            className={props.completed ? "complete" : ""}>

            Todo List:
            
            {props.item} </div>



    )

}

export default TodoList;