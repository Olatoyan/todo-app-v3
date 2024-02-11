import { Link, useParams } from "react-router-dom";
import { useTodoContext } from "../contexts/todoContext";

function MobileSummary() {
  const { id } = useParams();
  const { isDarkMode } = useTodoContext();

  return (
    <div
      className={`tablet:flex z-[9999] hidden justify-center gap-8 rounded-[0.5rem] px-8 py-10 text-[1.4rem] font-bold tracking-[-0.0194rem] ${isDarkMode ? "shadow-black-sh bg-[#25273d]" : "bg-white shadow-white-sh"}`}
    >
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
  );
}

export default MobileSummary;
