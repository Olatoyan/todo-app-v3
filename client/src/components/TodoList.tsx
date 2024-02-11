import TodoItems from "./TodoItems";
import TodoSummaryBox from "./TodoSummaryBox";
import { useTodo } from "./useTodo";
import EmptyTodo from "./EmptyTodo";

function TodoList() {
  const { allTodo, isPending } = useTodo();

  if (isPending)
    return (
      <div className="bg-white shadow-white-sh">
        <p className="py-24 text-center text-[1.8rem] font-normal tracking-[-0.025rem]">
          Hold on while we get your tasks😁....
        </p>
      </div>
    );
  const { todos } = allTodo!;
  console.log(todos);

  return (
    <div className="bg-white shadow-white-sh">
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
