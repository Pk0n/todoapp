import React from "react";
import { TodoContext } from "../TodoContext/TodoContext.js";
import { TodoCounter } from "../Components/TodoCounter.js";
import { TodoSearch } from "../Components/TodoSearch.js";
import { TodoList } from "../Components/TodoList.js";
import { TodoItem } from "../Components/TodoItem.js";
import { CreateTodoButton } from "../Components/CreateTodoButton.js";

function AppUI() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

      <TodoContext.Consumer>
        {({ 
            error, 
            loading, 
            searchedTodos,  
            completeTodo, 
            deleteTodo,
          }) => (
            <TodoList>
              {error && <p>Ups! Hubo un error!</p>}
              {loading && <p>Cargando, por favor espere</p>}
              {(!loading && !searchedTodos.length) && <p>Crea tu primer ToDo!</p>}
    
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };