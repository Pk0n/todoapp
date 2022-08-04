import React from "react";
import { TodoCounter } from "../Components/TodoCounter.js";
import { TodoSearch } from "../Components/TodoSearch.js";
import { TodoList } from "../Components/TodoList.js";
import { TodoItem } from "../Components/TodoItem.js";
import { CreateTodoButton } from "../Components/CreateTodoButton.js";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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

      <CreateTodoButton />
    </>
  );
}

export { AppUI };