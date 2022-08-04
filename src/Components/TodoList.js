import React from "react";
import "../Styles/Styles.css"

function TodoList(props){
    return(
        <section>
            <ul className="List">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};