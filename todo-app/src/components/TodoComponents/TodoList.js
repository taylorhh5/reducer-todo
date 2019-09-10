
import { initialState, todoReducer } from "../../Reducers/todoReducer.js"

import React, { useState, useReducer } from 'react';

const TodoList = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);



    return (
        <div>
           Todo List:
            
                 <div> {props.item} </div>
          
        </div>
    )

}

export default TodoList;