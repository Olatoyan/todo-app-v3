// import { useState } from "react";
import TodoItems from "./TodoItems";
import TodoSummaryBox from "./TodoSummaryBox";
import { useTodo } from "./useTodo";

function TodoList() {
  const { allTodo, isPending } = useTodo();

  if (isPending) return <p className="text-4xl ">Loading</p>;
  const { todos } = allTodo!;
  console.log(todos);

  return (
    <div className="bg-white shadow-white-sh">
      {todos.length > 0
        ? todos.map((todo) => (
            <TodoItems
              key={todo._id}
              id={todo._id}
              name={todo.name}
              completed={todo.completed}
            />
          ))
        : "Nothing yet"}

      <TodoSummaryBox />
    </div>
  );
}

export default TodoList;
