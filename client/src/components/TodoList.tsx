import TodoItems from "./TodoItems";
import TodoSummaryBox from "./TodoSummaryBox";

function TodoList() {
  return (
    <div className="bg-white shadow-white-sh">
      <TodoItems />
      <TodoItems />
      <TodoItems />
      <TodoSummaryBox />
    </div>
  );
}

export default TodoList;
