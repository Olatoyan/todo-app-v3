import { Link } from "react-router-dom";
import { useTodo } from "./useTodo";
import { useDeleteCompletedTodo } from "./useDeleteCompletedTodo";
import { useParams } from "react-router-dom";

function TodoSummaryBox() {
  const { id } = useParams();
  const { allTodo } = useTodo();
  const { deleteCompletedTodo } = useDeleteCompletedTodo();

  console.log(allTodo);
  return (
    <footer className="flex items-center justify-between px-8 py-11">
      <p className="text-[1.4rem] tracking-[-0.0194rem] text-[#9495a5]">
        {allTodo!.results} items left
      </p>

      <div className="z-[9999] flex gap-4 text-[1.4rem] font-bold tracking-[-0.0194rem]">
        <Link
          to="/all"
          className={`${id === "all" ? "text-[#3A7CFD]" : "text-[#9495a5]"}`}
        >
          All
        </Link>
        <Link
          to="/active"
          className={`${id === "active" ? "text-[#3A7CFD]" : "text-[#9495a5]"}`}
        >
          Active
        </Link>
        <Link
          to="/completed"
          className={`${id === "completed" ? "text-[#3A7CFD]" : "text-[#9495a5]"}`}
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
