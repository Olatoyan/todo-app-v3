import TodoItems from "./TodoItems";
import TodoSummaryBox from "./TodoSummaryBox";
import { useTodo } from "./useTodo";
import EmptyTodo from "./EmptyTodo";
import { useTodoContext } from "../contexts/todoContext";

function TodoList() {
  const { allTodo, isPending } = useTodo();
  const { isDarkMode } = useTodoContext();
  if (isPending)
    return (
      <div
        className={`rounded-[0.5rem] transition-none ${isDarkMode ? "shadow-black-sh bg-[#25273d] text-[#c5c6f6]" : "bg-white text-[#5b5e7e] shadow-white-sh"}`}
      >
        <p className="py-24 text-center text-[1.8rem] font-normal tracking-[-0.025rem]">
          Hold on while we get your tasks😁....
        </p>
      </div>
    );
  const { todos } = allTodo!;
  console.log(todos);

  return (
    <div
      className={`${isDarkMode ? "shadow-black-sh bg-[#25273d]" : "bg-white shadow-white-sh"} rounded-[0.5rem]`}
    >
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItems
            key={todo._id}
            id={todo._id}
            name={todo.name}
            completed={todo.completed}
          />
        ))
      ) : (
        <EmptyTodo />
      )}

      <TodoSummaryBox />
    </div>
  );
}

export default TodoList;
