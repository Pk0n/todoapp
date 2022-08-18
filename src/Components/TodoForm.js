import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "../Styles/Styles.css"

function TodoForm()
{
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal, } = React.useContext(TodoContext);
    
    const onCancel = () => 
    {
        setOpenModal(false);
    };
    const onChange = (event) => 
    {
        setNewTodoValue(event.target.value);
    };
    const onSubmit = (event) => 
    {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Ingresa tu nuevo ToDo</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Escribe tu nuevo ToDo!"/>
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-cancelButton" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-addButton">Agregar</button>
            </div>
        </form>
    )
}

export { TodoForm };