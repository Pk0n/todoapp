import React from "react";
import "../Styles/Styles.css"

function CreateTodoButton(props)
{
    const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
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