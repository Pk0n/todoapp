import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "../Styles/Styles.css"

function CreateTodoButton()
{
    const {openModal, setOpenModal } = React.useContext(TodoContext);
    const onClickButton = () => {
    setOpenModal(!openModal);
    }

    return(
        <button
         className="CreateTodoButton"
         onClick={onClickButton}>
            +
        </button>
    );
}

export { CreateTodoButton };