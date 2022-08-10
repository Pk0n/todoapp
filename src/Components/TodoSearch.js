import React from "react";
import "../Styles/Styles.css"
import { TodoContext } from "../TodoContext/TodoContext";

function TodoSearch(){
    const { setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => 
    {
        setSearchValue(event.target.value);
    }

    return[
        <input 
            className="TodoSearch" 
            placeholder="ToDo Search" 
            onChange={onSearchValueChange}
            />
    ];
}

export { TodoSearch };