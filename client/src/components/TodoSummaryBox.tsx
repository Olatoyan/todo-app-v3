import { Link } from "react-router-dom";
import { useTodo } from "./useTodo";
import { useDeleteCompletedTodo } from "./useDeleteCompletedTodo";
import { useParams } from "react-router-dom";
import { useTodoContext } from "../contexts/todoContext";

function TodoSummaryBox() {
  const { id } = useParams();
  const { allTodo } = useTodo();
  const { deleteCompletedTodo } = useDeleteCompletedTodo();
  const { isDarkMode } = useTodoContext();

  console.log(allTodo);
  return (
    <footer className="flex items-center justify-between px-8 py-11">
      <p className="text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5]">
        {allTodo!.results} items left
      </p>

      <div className="tablet:hidden z-[9999] flex gap-4 text-[1.4rem] font-bold tracking-[-0.0194rem]">
        <Link
          to="/all"
          className={`${id === "all" ? "text-[#3A7CFD]" : isDarkMode ? "text-[#5b5e7e] hover:text-[#e3e4f1]" : "text-[#9495a5] hover:text-[#494c6b]"}`}
        >
          All
        </Link>
        <Link
          to="/active"
          className={`${id === "active" ? "text-[#3A7CFD]" : isDarkMode ? "text-[#5b5e7e] hover:text-[#e3e4f1]" : "text-[#9495a5] hover:text-[#494c6b]"}`}
        >
          Active
        </Link>
        <Link
          to="/completed"
          className={`${id === "completed" ? "text-[#3A7CFD]" : isDarkMode ? "text-[#5b5e7e] hover:text-[#e3e4f1]" : "text-[#9495a5] hover:text-[#494c6b]"}`}
        >
          Completed
        </Link>
      </div>

      <button
        className="text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5]"
        onClick={deleteCompletedTodo}
      >
        Clear Completed
      </button>
    </footer>
  );
}

export default TodoSummaryBox;
