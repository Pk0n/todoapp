import React from "react";
import "../Styles/Styles.css"

function TodoCounter({ total, completed })
{
    return(
        <h2 className="TodoCounter"> Completed {completed} of {total} ToDo's </h2>
    )
}

export {TodoCounter};