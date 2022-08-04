import React from "react";
import "../Styles/Styles.css"

function TodoSearch({ searchValue, setSearchValue}){
    const onSearchValueChange = (event) => 
    {
        console.log(event.target.value);
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

export {TodoSearch};