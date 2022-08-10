import React from "react";
import "../Styles/Styles.css"
import { TodoContext } from "../TodoContext/TodoContext";

function TodoCounter()
{
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return(
        <h2 className="TodoCounter"> Completed {completedTodos} of {totalTodos} ToDo's </h2>
    )
}

export {TodoCounter};