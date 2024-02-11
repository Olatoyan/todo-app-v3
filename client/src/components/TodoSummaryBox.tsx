import { Link } from "react-router-dom";
import { useTodo } from "./useTodo";

function TodoSummaryBox() {
  const { allTodo } = useTodo();

  console.log(allTodo);
  return (
    <footer className="flex items-center justify-between px-8 py-11">
      <p className="text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5]">
        {allTodo!.results} items left
      </p>

      <div className="flex gap-4 text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5]">
        <Link to="/all">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/completed">Completed</Link>
      </div>

      <button className="text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5]">
        Clear Completed
      </button>
    </footer>
  );
}

export default TodoSummaryBox;
