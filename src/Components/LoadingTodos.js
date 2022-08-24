import React from "react";

function LoadingTodos()
{
        return(
            <li className="LoadingTodoItem">
                <span className={`LoadingIconC`}></span>
                <span className="LoadingIconE"></span>
            </li>)
}

export { LoadingTodos };