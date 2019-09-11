import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from "../../Reducers/todoReducer.js"
import TodoList from './TodoList.js'
const TodoForm = () => {
    const [todo, setTodo] = useState();
    const [state, dispatch] = useReducer(todoReducer, initialState);



    const handleChange = event => {
        event.preventDefault();
        setTodo(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: "ADD_TODO", payload: todo });
        setTodo("");
        console.log(state)
    }
    const completed = event => {
        event.preventDefault();
        dispatch({ type: "NOW_COMPLETED" });

    }



    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="newtodo" placeholder="Add" onChange={handleChange} value={todo} />
                <button type="submit">Add new</button>

                <button onClick={completed}>Clear Complete</button>

            </form>
            {state.list.map(newitem => (
                <TodoList
                    dispatch={dispatch}
                    item={newitem.item}
                    completed={newitem.completed}
                    id={newitem.id}
                />
            ))
            }
        </div>
    );
}



// }

export default TodoForm;